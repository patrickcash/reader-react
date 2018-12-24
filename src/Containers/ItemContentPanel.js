import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class ItemContentPanel extends Component {
  
    render() {
      return (
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Content</Panel.Title>
          </Panel.Heading>
            <Panel.Body>
              Body Content
            </Panel.Body>
        </Panel>
      );
    }
  }
  
  export default ItemContentPanel;
  