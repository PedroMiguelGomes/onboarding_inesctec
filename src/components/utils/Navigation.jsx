import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: "",
    };
  }

  componentDidMount() {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      this.setState({ user: JSON.parse(loggedInUser)["name"] });
    }
  }

  render() {
    return (
      <div className="navigation">
        <Navbar className="navbarColor" variant="dark" expand="lg" >
          <Navbar.Brand href="/chap">
            <img
              src="/logo.png"
              width="auto"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarscroll" />
          <Navbar.Collapse id="navbarscroll">
            {this.state.user ? (
              <>
                <Nav
                  className="mr-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarscroll="true"
                >
                  <Nav.Link href="/chap">Levels</Nav.Link>
                  <Nav.Link href="/tasksCESE">Tasks</Nav.Link>
                </Nav>
                <Nav
                  className="ml-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarscroll="true"
                >
                  <NavDropdown className="nome" title={this.state.user} id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </>
            ) : (<></>)}

          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}