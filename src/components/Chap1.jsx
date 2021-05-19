import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { Link, withRouter } from "react-router-dom";
import "../App.css";

const Chap1 = () => (
  <Container>
    <br />
    <Row className="header">
      <Col></Col>
      <Col>
        <h1>Chapter 1</h1>
      </Col>
      <Col></Col>
    </Row>
    <Row className="header">
      <Col>
        <br />
		<Link class="nav-link" to="/content">
        <h3>Subchapter 1</h3>
        <Image src="Man.jpeg" roundedCircle />
        <br />
        <br />
        <ProgressBar now={60} />
		</Link>
      </Col>
      <Col>
        <br />
		<Link class="nav-link" to="/content">
        <h3>Subchapter 2</h3>
        <Image src="Man.jpeg" roundedCircle />
        <br />
        <br />
        <ProgressBar now={35} />
		</Link>
      </Col>
      <Col>
        <br />
        <h3>Subchapter 3</h3>
        <Image src="Man.jpeg" roundedCircle className="locked"/>
        <br />
        <br />
        <ProgressBar now={0} />
      </Col>
    </Row>
  </Container>
);

export default Chap1;
