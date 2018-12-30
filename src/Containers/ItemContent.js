import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';
import renderHTML from 'react-render-html';

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

    renderItemPubDate = itemContent => {
      if(!itemContent.pubDate){
        return null;
      }
      return (
        <div>
          <p>Published: {itemContent.pubDate}</p>
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
          <Card>
            <CardHeader>Content Area</CardHeader>
            <CardBody>
              <CardText>Select a feed item to see its content</CardText>
            </CardBody>
        </Card>
        );
      }
      else{
        return (
          <Card>
            <CardHeader>{this.props.feedItemContent.title}</CardHeader>
            <CardBody>
              <CardText>
                {this.renderItemLink(this.props.feedItemContent)}
                {this.renderItemPubDate(this.props.feedItemContent)}
                {this.renderItemContent(this.props.feedItemContent)}
              </CardText>
            </CardBody>
          </Card>
        );
      }
    }
  }
  
  export default ItemContent;
  