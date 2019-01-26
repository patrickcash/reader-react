import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { connect } from 'react-redux';
import { getFeedItem } from '../actions/FeedActions';
import isEmpty from 'lodash/isEmpty';

import './ItemList.css';

class ItemList extends Component {

  constructor(){
    super();
    this.state = {
      activeFeedItem: 0
    };
  }

  componentDidUpdate(prevProps){
    if(isEmpty(prevProps.feedItems)){
      this.props.getFeedItem(0);
    }
  }

  handleFeedItemClick = index => {
    this.props.getFeedItem(index);
    this.setState({activeFeedItem: index});
  }

  renderFeedItems = feedItems => {
    return feedItems.map((item,index) =>
      <ListGroupItem id="feed-item" key={"item"+index} active={index === this.state.activeFeedItem} onClick={() => this.handleFeedItemClick(index)}>
        <ListGroupItemHeading id="feed-item-heading">{item.title}</ListGroupItemHeading>
        <ListGroupItemText id="feed-item-author">Author: {item.author}</ListGroupItemText>
      </ListGroupItem>
    );  
  }  

  render() {
    return (
      <Card id="item-card">
          <ListGroup id="item-list">
          { isEmpty(this.props.feedItems)
            ? <ListGroup id="item-list">
            <ListGroupItem id="feed-item">Select a feed</ListGroupItem>
            </ListGroup>
            : <ListGroup id="item-list">
            {this.renderFeedItems(this.props.feedItems)}
            </ListGroup>
          }
          </ListGroup>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  feedItems: state.feedItems
})

const mapDispatchToProps = dispatch => ({
  getFeedItem: (index) => {dispatch(getFeedItem(index))},
})

export default connect (mapStateToProps, mapDispatchToProps)(ItemList);