import React, { Component } from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';

class FeedSidebar extends Component {


    renderFeedList = feeds => {
      return feeds.map((item,index) =>
        <ListGroupItem key={index} onClick={() => this.props.handleFeedClick(index)}>{item.name}</ListGroupItem>
      );  
    }  
  
    render() {
      return (
        <Card>
          <CardHeader>Feeds</CardHeader>
          <ListGroup flush>
            {this.renderFeedList(this.props.feeds)}
          </ListGroup>
        </Card>
        
      );
    }
  }
  
  export default FeedSidebar;