import React, { Component } from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';

import './FeedSidebar.css';

class FeedSidebar extends Component {


    renderFeedList = feeds => {
      return feeds.map((item,index) =>
        <ListGroupItem id="feed" key={index} onClick={() => this.props.handleFeedClick(index)}>{item.name}</ListGroupItem>
      );  
    }  
  
    render() {
      return (
        <Card id="feed-card">
          <CardHeader id="feed-header">Feeds</CardHeader>
          <ListGroup flush id="feed-list">
            {this.renderFeedList(this.props.feeds)}
          </ListGroup>
        </Card>
        
      );
    }
  }
  
  export default FeedSidebar;