import React, { Component } from "react";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";

class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" fixed="bottom">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#institution">Institutional Onboarding</Nav.Link>
                    <Nav.Link href="#center">Center Onboarding</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Nav;