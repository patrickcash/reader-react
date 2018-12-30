import React, { Component }  from 'react';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import FeedSidebar from './Containers/FeedSidebar.js'
import ItemList from './Containers/ItemList.js'
import ItemContent from './Containers/ItemContent.js'

import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      
      feedList: {
          "feeds": [
          {
            name: "Reddit: Web Development",
            feedURL: "https://www.reddit.com/r/webdev.rss"
          },
          {
            name: "Reddit: Javascript",
            feedURL: "https://www.reddit.com/r/JavaScript.rss"
          },
          {
            name: "Reddit: React",
            feedURL: "https://www.reddit.com/r/reactjs.rss"
          },
          {
            name: "Reddit: Front-end Development",
            feedURL: "https://www.reddit.com/r/Frontend.rss"
          },
          {
            name: "Reddit: Data Science",
            feedURL: "https://www.reddit.com/r/datascience.rss"
          },
          {
            name: "Reddit: Data is beautiful",
            feedURL: "https://www.reddit.com/r/dataisbeautiful.rss"
          },
          {
            name: "Reddit: Machine Learning",
            feedURL: "https://www.reddit.com/r/MachineLearning.rss"
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
      <Container fluid={true}>
          <Row>
            <Col md={12} className="mainColumn">
              <Navbar className="navbar">
                <NavbarBrand>
                  Reader
                </NavbarBrand>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="mainColumn">
              <FeedSidebar feeds={this.state.feedList.feeds} handleFeedClick={this.handleFeedClick}/>
            </Col>
            <Col md={3} className="mainColumn">
              <ItemList feedItems={this.state.feedItems} handleFeedItemClick={this.handleFeedItemClick}/>
            </Col>
            <Col md={6} className="mainColumn">
              <ItemContent feedItemContent={this.state.feedItemContent}/>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mainColumn">
              <dov className="footer"></dov>
            </Col>
          </Row>
        </Container> 
    );
  }
}

export default App;