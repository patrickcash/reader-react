import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import renderHTML from 'react-render-html';

class ItemContentPanel extends Component {
  
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
      console.log(itemContent);
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
          <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Content Area</Panel.Title>
          </Panel.Heading>
            <Panel.Body>
              Select a feed item to see its content
            </Panel.Body>
        </Panel>
        );
      }
      else{
        return (
          <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">{this.props.feedItemContent.title}</Panel.Title>
          </Panel.Heading>
            <Panel.Body>
              {this.renderItemLink(this.props.feedItemContent)}
              {this.renderItemPubDate(this.props.feedItemContent)}
              {this.renderItemContent(this.props.feedItemContent)}
            </Panel.Body>
        </Panel>
        );
      }
    }
  }
  
  export default ItemContentPanel;
  