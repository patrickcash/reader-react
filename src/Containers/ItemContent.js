import React, { Component } from 'react';
import { Card, CardBody, CardText, CardLink } from 'reactstrap';
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
      <div>
        <CardLink href={itemContent.link}>{itemContent.link}</CardLink>
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
        <CardBody id="content-body">
        { isEmpty(this.props.feedItemContent)
          ? <CardText>Select a feed item to see its content</CardText>
          : 
          <div>
            {this.renderItemLink(this.props.feedItemContent)}
            {this.renderItemContent(this.props.feedItemContent)}
          </div>
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