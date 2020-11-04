import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';
import { connect } from 'react-redux';
import { getFeedItem } from '../actions/FeedActions';
import isEmpty from 'lodash/isEmpty';

import './ItemList.css';

/*
 * Displays all of the items available for the selected feed
 */
class ItemList extends Component {

  constructor(){
    super();
    this.state = {
      activeFeedItem: 0
    };
  }

  /*
   * Select the first item in the feed to display the content of that item in the item content card
   */
  componentDidUpdate(prevProps){
    if(prevProps.feedItems !== this.props.feedItems){
      this.props.getFeedItem(0);
      if(this.state.activeFeedItem !== 0){
        this.setState({activeFeedItem: 0});
      }
    }
  }

  /*
   * Display the content of the selected item in the item content card
   */
  handleFeedItemClick = index => {
    this.props.getFeedItem(index);
    this.setState({activeFeedItem: index});
  }

  renderFeedItems = feedItems => {
    return feedItems.map((item,index) =>
      <ListGroupItem id="feed-item" key={"item"+index} active={index === this.state.activeFeedItem} onClick={() => this.handleFeedItemClick(index)}>
        <ListGroupItemText id="feed-item-heading">{item.title}</ListGroupItemText>
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