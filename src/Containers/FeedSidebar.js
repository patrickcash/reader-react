import React, { Component } from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getFeedList, getFeed } from '../actions/FeedActions';
import isEmpty from 'lodash/isEmpty';

import './FeedSidebar.css';

/*
 * Displays all of the feeds the user is subscibed to
 */
class FeedSidebar extends Component {

  constructor(){
    super();
    this.state = {
      activeFeedIndex: 0
    };
  }

  /*
  * Load the initial feed list into the list
  */
  componentDidMount(){
    this.props.getFeedList();
  }

  /*
   * Select to first feed in the list to populate the feed item list
   */
  componentDidUpdate(prevProps){
    if(isEmpty(prevProps.feedList)){
      this.props.getFeed(this.props.feedList.feeds[0].feedURL)
    }
  }

  /*
  * Load the feed items for selected feed
  */
  handleFeedClick = index => {
    this.props.getFeed(this.props.feedList.feeds[index].feedURL)
    this.setState({activeFeedIndex: index});
  }

  renderFeedList = feedList => {
    if(feedList && feedList.feeds) {
      return feedList.feeds.map((item,index) =>
        <ListGroupItem id="feed" key={index} active={index === this.state.activeFeedIndex} onClick={() => this.handleFeedClick(index)}>{item.name}</ListGroupItem>
      );  
    }
  }  
  
  render() {
    return (
      <Card id="feed-card">
        <CardHeader id="feed-header">Feeds</CardHeader>
        <ListGroup flush id="feed-list">
          {isEmpty(this.props.feedList)
            ? <ListGroup id="item-list">
            <ListGroupItem id="feed-item">Loading Feeds</ListGroupItem>
            </ListGroup>
            : <ListGroup id="item-list">
            {this.renderFeedList(this.props.feedList)}
            </ListGroup>
          }
        </ListGroup>
      </Card>    
    );
  }
}

const mapStateToProps = state => ({
  feedList: state.feedList
})

const mapDispatchToProps = dispatch => ({
  getFeedList: () => {dispatch(getFeedList())},
  getFeed: (url) => {dispatch(getFeed(url))}
})

export default connect (mapStateToProps, mapDispatchToProps)(FeedSidebar);