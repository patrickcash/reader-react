import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class FeedItemsPanel extends Component {

  
    render() {
      return (
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Items</Panel.Title>
          </Panel.Heading>
            <ListGroup id="feedItemsList">
              <ListGroupItem>Item 1</ListGroupItem>
            </ListGroup>
        </Panel>
      );
    }
  }
  
  export default FeedItemsPanel;