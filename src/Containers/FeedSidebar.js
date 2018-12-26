import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class FeedSidebar extends Component {


    renderFeedList = feeds => {
      return feeds.map((item,index) =>
        <ListGroupItem key={index} onClick={() => this.props.handleFeedClick(index)}>{item.name}</ListGroupItem>
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
  
  export default FeedSidebar;