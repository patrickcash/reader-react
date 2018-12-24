import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class FeedsPanel extends Component {


    renderFeedList = feedList => {
      return feedList.feeds.map((value,index) =>
        <ListGroupItem key={index} onClick={() => this.props.handleFeedClick(index)}>{value.name}</ListGroupItem>
      );  
    }  
  
    render() {
      return (
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Feeds</Panel.Title>
          </Panel.Heading>
          <ListGroup>
            {this.renderFeedList(this.props.feeds)}
          </ListGroup>
        </Panel>
        
      );
    }
  }
  
  export default FeedsPanel;