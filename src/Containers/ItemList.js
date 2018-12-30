import React, { Component } from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import './ItemList.css';

class ItemList extends Component {

    renderFeedItems = feedItems => {
      return feedItems.map((item,index) =>
        <ListGroupItem id="feed-item" key={"item"+index} onClick={() => this.props.handleFeedItemClick(index)}>
          <ListGroupItemHeading id="group-item-heading">{item.title}</ListGroupItemHeading>
          <ListGroupItemText id="group-item-author">Author: {item.author}</ListGroupItemText>
        </ListGroupItem>
      );  
    }  
  
    render() {
      if(JSON.stringify(this.props.feedItems) === JSON.stringify({})){
        return (
          <Card id="item-card">
            <CardHeader id="item-header">Items</CardHeader>
              <ListGroup id="item-list">
              <ListGroupItem id="feed-item">Select a feed</ListGroupItem>
              </ListGroup>
          </Card>
        );
      }
      else{
        return (
          <Card id="item-card">
            <CardHeader id="item-header">Items</CardHeader>
              <ListGroup id="item-list">
                {this.renderFeedItems(this.props.feedItems)}
              </ListGroup>
          </Card>
        );
      }
    }
  }
  
  export default ItemList;