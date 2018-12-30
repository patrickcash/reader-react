import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';
import renderHTML from 'react-render-html';

import './ItemContent.css';

class ItemContent extends Component {
  
    renderItemLink = itemContent => {
      if(!itemContent.link){
        return null;
      }
      return (
        <div>
          <span>URL: <a target="_blank" rel="noopener noreferrer" href={itemContent.link}>{itemContent.link}</a></span>
          <hr/>
        </div>
      );
    }  

    renderItemContent = itemContent => {
      if(!itemContent.content){
        return null;
      }
      return (
        <div>
          {renderHTML(itemContent.content)};
          <hr/>
        </div>
      );
    }  

    render() {
      if(JSON.stringify(this.props.feedItemContent) === JSON.stringify({})){
        return (
          <Card id="content-card">
            <CardHeader id="content=header">Content Area</CardHeader>
            <CardBody>
              <CardText>Select a feed item to see its content</CardText>
            </CardBody>
        </Card>
        );
      }
      else{
        return (
          <Card id="content-card">
            <CardHeader id="content=header">{this.props.feedItemContent.title}</CardHeader>
            <CardBody id="content-body">
              <CardText>
                {this.renderItemLink(this.props.feedItemContent)}
                {this.renderItemContent(this.props.feedItemContent)}
              </CardText>
            </CardBody>
          </Card>
        );
      }
    }
  }
  
  export default ItemContent;
  