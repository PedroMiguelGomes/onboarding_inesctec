import React, { Component } from "react";
import axios from 'axios';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: [],
      userQuestions: [],
      questionsList: []
    };
  }

  componentDidMount() {
    axios.get("https://run.mocky.io/v3/9127525c-5192-48b9-a97f-02ce0fcfaa84")
      .then((res) => {
        const user = res.data;
        this.setState({ user: user });
      });
  }

  render() {
    return (
    <div className="navigation">
      <Navbar bg="dark" variant="dark" expand="lg" >
        <Navbar.Brand href="/">INESC TEC</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/chap">Chap</Nav.Link>
            <Nav.Link href="/tasks">Tasks</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown title="Drop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>{this.state.user.name}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
);
}
}