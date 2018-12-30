import React, { Component } from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class ItemList extends Component {

    renderFeedItems = feedItems => {
      return feedItems.map((item,index) =>
        <ListGroupItem key={"item"+index} onClick={() => this.props.handleFeedItemClick(index)}>
          <ListGroupItemHeading>{item.title}</ListGroupItemHeading>
          <ListGroupItemText>Author: {item.author}</ListGroupItemText>
        </ListGroupItem>
      );  
    }  
  
    render() {
      if(JSON.stringify(this.props.feedItems) === JSON.stringify({})){
        return (
          <Card>
            <CardHeader>Items</CardHeader>
              <ListGroup>
              <ListGroupItem>Select a feed</ListGroupItem>
              </ListGroup>
          </Card>
        );
      }
      else{
        return (
          <Card>
            <CardHeader>Items</CardHeader>
              <ListGroup>
                {this.renderFeedItems(this.props.feedItems)}
              </ListGroup>
          </Card>
        );
      }
    }
  }
  
  export default ItemList;