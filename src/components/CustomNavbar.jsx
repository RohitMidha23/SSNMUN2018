  import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {View, Linking, Text, Image} from 'react-native';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {

  render() {

      return (
        <Navbar fixedTop default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        <Navbar.Text pullRight>
            <b style={{marginLeft: "3em", color: "black", fontFamily: "Arial, Helvetica"}}>SSN MUN 2018</b>
            </Navbar.Text>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              <b>Home</b>
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/committees" to="/committees">
              <b>Committees</b>
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/apply" to="/apply" >
              <b>Delegate Applications</b>
            </NavItem>
            {/* <NavItem eventKey={4} componentClass={Link} href="/Payment" to="/Payment">
              <b>Payment</b>
            </NavItem> */}
            <NavItem eventKey={4} componentClass={Link} href="/Allotments" to="/Allotments">
              <b>Allotments</b>
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/Accommodation" to="/Accommodation">
              <b>Accommodation</b>
            </NavItem>
            <NavItem eventKey={6} componentClass={Link} href="/Team" to="/Team">
              <b>The Organising Team</b>
            </NavItem>
            <NavItem eventKey={7} componentClass={Link} href="/Sponsors" to="/Sponsors">
              <b>Sponsors</b>
            </NavItem>
            <NavItem eventKey={8} componentClass={Link} href="/ContactUs" to="/ContactUs">
              <b>Contact Us</b>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      );

  }
}