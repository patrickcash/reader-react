import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardText, CardLink } from 'reactstrap';
import renderHTML from 'react-render-html';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import './ItemContent.css';

/*
 * Displays the content of the individual feed item
 */
class ItemContent extends Component {
  
  /*
   * Render the link back to the item content
   */
  renderItemLink = itemContent => {
    if(!itemContent.link){
      return null;
    }
    return (
      <div id="card-link">
        <CardLink href={itemContent.link}>Visit Website</CardLink>
        <hr/>
      </div>
    );
  }  

  /*
   * Render the html content for the selected item
   */
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
    return (
      <Card id="content-card">
        <CardHeader id="content-header">{this.props.feedItemContent.title}</CardHeader>
        <CardBody id="content-body">
        { isEmpty(this.props.feedItemContent)
          ? <CardText>Select a feed item to see its content</CardText>
          : 
          <CardText>
            {this.renderItemContent(this.props.feedItemContent)}
            {this.renderItemLink(this.props.feedItemContent)}
          </CardText>
        }
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  feedItemContent: state.feedItemContent
})

export default connect (mapStateToProps, null)(ItemContent);