import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class FeedItemsPanel extends Component {

    renderFeedItems = feedItems => {
      return feedItems.map((value,index) =>
        <ListGroupItem key={"feedItem"+index} header={value.title} onClick={() => this.props.handleFeedItemClick(index)}>{value.author}</ListGroupItem>
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
  
  export default FeedItemsPanel;