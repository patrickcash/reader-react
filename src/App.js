import React, { Component }  from 'react';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import FeedSidebar from './containers/FeedSidebar.js'
import ItemList from './containers/ItemList.js'
import ItemContent from './containers/ItemContent.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {

  render() {
    return (
      <Container fluid={true} className="app-container">
          <Row>
            <Col md={12} className="navbar-column">
              <Navbar className="navbar">
                <NavbarBrand>
                  Reader
                </NavbarBrand>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="sidebar-column">
              <FeedSidebar className="sidebar"/>
            </Col>
            <Col md={3} className="items-column">
              <ItemList className="item-list"/>
            </Col>
            <Col md={6} className="content-column">
              <ItemContent className="item-content"/>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="footer-column">
              <div className="navbar footer"></div>
            </Col>
          </Row>
        </Container> 
    );
  }
}

export default App;