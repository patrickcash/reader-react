import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class ItemList extends Component {

    renderFeedItems = feedItems => {
      return feedItems.map((item,index) =>
        <ListGroupItem key={"item"+index} header={item.title} onClick={() => this.props.handleFeedItemClick(index)}>{item.author}</ListGroupItem>
      );  
    }  
  
    render() {
      if(JSON.stringify(this.props.feedItems) === JSON.stringify({})){
        return (
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Items</Panel.Title>
            </Panel.Heading>
              <ListGroup>
              <ListGroupItem>Select a feed</ListGroupItem>
              </ListGroup>
          </Panel>
        );
      }
      else{
        return (
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Items</Panel.Title>
            </Panel.Heading>
              <ListGroup>
              {this.renderFeedItems(this.props.feedItems)}
              </ListGroup>
          </Panel>
        );
      }
    }
  }
  
  export default ItemList;