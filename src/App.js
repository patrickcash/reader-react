import React, { Component }  from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import FeedsPanel from './Containers/FeedsPanel.js'
import FeedItemsPanel from './Containers/FeedItemsPanel.js'
import ItemContentPanel from './Containers/ItemContentPanel.js'

import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      
      feedList: {
          "feeds": [
          {
            name: "Programming",
            feedURL: "https://www.reddit.com/r/programming.rss"
          },
          {
            name: "Web Development",
            feedURL: "https://www.reddit.com/r/webdev.rss"
          },
          {
            name: "Javascript",
            feedURL: "https://www.reddit.com/r/JavaScript.rss"
          },
          {
            name: "React",
            feedURL: "https://www.reddit.com/r/reactjs.rss"
          },
          {
            name: "Front-end Development",
            feedURL: "https://www.reddit.com/r/Frontend.rss"
          },
          {
            name: "Flowing Data",
            feedURL: "https://flowingdata.com/feed/"
          },
          {
            name: "The Economist - Graphic",
            feedURL: "http://www.economist.com/graphic-detail/rss.xml"
          },
        ]},
      feedItems:{},
      feedItemContent:{}
    };
  }

  componentDidMount(){
    // select first feed and feed item on load of app
    this.populateFeedItems(this.state.feedList.feeds[0].feedURL);
  }

  handleFeedClick = feedIndex => {
    this.populateFeedItems(this.state.feedList.feeds[feedIndex].feedURL);
  }

  populateFeedItems = (feedURL) => {
    if (feedURL) {
      // use rss2json link to simulate getting json from a beakend server if this was a full RSS reader app
      const parseURL = "https://api.rss2json.com/v1/api.json?rss_url=";
      fetch(parseURL + feedURL)
      .then(response => response.json())
      .then(json => {
        //console.log(JSON.stringify(json.items));
        if(json.status === "ok"){
          this.setState({feedItems: json.items, feedItemContent: json.items[0]}) // auto select first feed item
        }
        else{
          this.setState({feedItems: {}, feedItemContent: {}}) 
        }
        }
      );
    }
  }

  handleFeedItemClick = itemIndex => {
    this.setState({
      feedItemContent: this.state.feedItems[itemIndex]
    });
  }

  render() {
    return (
      <Grid fluid={true}>
          <Row>
            <Col md={12}>
              <Navbar fluid={true}>
                <Navbar.Header>
                  <Navbar.Brand>
                    Reader
                  </Navbar.Brand>
                </Navbar.Header>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col md={3} style={{paddingLeft: 5, paddingRight:5}}>
              <FeedsPanel feeds={this.state.feedList} handleFeedClick={this.handleFeedClick}/>
            </Col>
            <Col md={3} style={{paddingLeft: 5, paddingRight:5}}>
              <FeedItemsPanel feedItems={this.state.feedItems} handleFeedItemClick={this.handleFeedItemClick}/>
            </Col>
            <Col md={6} style={{paddingLeft: 5, paddingRight:5}}>
              <ItemContentPanel feedItemContent={this.state.feedItemContent}/>
            </Col>
          </Row>
        </Grid> 
    );
  }
}

export default App;