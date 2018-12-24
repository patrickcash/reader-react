import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class FeedsPanel extends Component {

    
  
    render() {
      return (
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Feeds</Panel.Title>
          </Panel.Heading>
          <ListGroup>
            <ListGroupItem>Item 1</ListGroupItem>
          </ListGroup>
        </Panel>
        
      );
    }
  }
  
  export default FeedsPanel;