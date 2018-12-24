import React, { Component }  from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import FeedsPanel from './Containers/FeedsPanel.js'
import FeedItemsPanel from './Containers/FeedItemsPanel.js'
import ItemContentPanel from './Containers/ItemContentPanel.js'

import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

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
              <FeedsPanel/>
            </Col>
            <Col md={3} style={{paddingLeft: 5, paddingRight:5}}>
              <FeedItemsPanel/>
            </Col>
            <Col md={6} style={{paddingLeft: 5, paddingRight:5}}>
              <ItemContentPanel/>
            </Col>
          </Row>
        </Grid> 
    );
  }
}

export default App;