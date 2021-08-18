import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";


class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: "",
      center: "",
    };
  }

  componentDidMount() {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      this.setState({ user: JSON.parse(loggedInUser)["name"] });
      console.log(JSON.parse(loggedInUser));
      this.setState({ center: JSON.parse(loggedInUser)["centerService"] });
    }
  }

  handleLogout = (e) => {
    sessionStorage.clear();
    let path = '/';
    this.props.history.push(path);
    window.location.reload();
  };

  render() {
    return (
      <div className="navigation">
        <Navbar className="navbarColor" variant="dark" expand="lg" >
          <Navbar.Brand href="/chap">
            <img
              src="logo.png"
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
                  <Link className="nav-link" to="/chap">Acolhimento & Integração</Link>
                  <Link className="nav-link" to="/tasksCESE">{this.state.center}</Link>
                </Nav>
                <Nav
                  className="ml-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarscroll="true"
                >
                  <NavDropdown className="nome" title={this.state.user} id="navbarScrollingDropdown">
                    <NavDropdown.Item><button type="button" onClick={this.handleLogout}>Logout</button></NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </>
            ) : (<></>)}

          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
} export default withRouter(Navigation);