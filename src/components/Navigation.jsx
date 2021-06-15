import React, { Component, useState, useEffect } from "react";
import axios from 'axios';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: "" ,
      userQuestions: [],
      questionsList: []
    };
  }



  componentDidMount() {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      this.setState({ user: JSON.parse(loggedInUser)["name"]});
    }
  }

  render() {
    return (
    <div className="navigation">
      <Navbar bg="dark" variant="dark" expand="lg" >
        <Navbar.Brand href="/">INESC TEC</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
            
            {this.state.user ? (
              <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
              >
              <Nav.Link href="/chap">Chap</Nav.Link>
              <Nav.Link href="/tasks">Tasks</Nav.Link>
            <NavDropdown title={this.state.user} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/plus">Logout</NavDropdown.Item>
            </NavDropdown>
            </Nav>): (<div></div>)}
          
        </Navbar.Collapse>
      </Navbar>
    </div>
);
}
}