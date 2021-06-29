import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";
export default function Login(){
  const [c1, setC1] = useState([]);
  const [c2, setC2] = useState(true);
  
  axios.get('https://run.mocky.io/v3/d682f1d3-fe57-4c5f-ba74-688f355d4002').then(resp => {
    if(c2){
    c1.push(resp.data["progress"]["1"]);
    c1.push(resp.data["progress"]["2"]);
    console.log(c1);
    setC2(false);
    }
  });

  
  return(
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
		    <Link class="nav-link" to="/subchap">
        <h3>Subchapter 1</h3>
        <Image src="inesctec.jpeg" roundedCircle />
        <br />
        <br />
        <ProgressBar now={c1[0]} />
		</Link>
      </Col>
      <Col>
        <br />
		    <Link class="nav-link" to="/tasks">
        <h3>Subchapter 2</h3>
        <Image src="Man.jpeg" roundedCircle />
        <br />
        <br />
        <ProgressBar now={c1[1]} />
		</Link>
      </Col>
      <Col>
        <br />
		    <Link class="nav-link">
        <h3>Subchapter 3</h3>
        <Image src="Man.jpeg" roundedCircle className="locked"/>
        <br />
        <br />
        <ProgressBar now={0} />
		</Link>
      </Col>
    </Row>
    <br />
    <Row className="header">
      <Col></Col>
      <Col>
        <h1>Chapter 2</h1>
      </Col>
      <Col></Col>
    </Row>
    <Row className="header locked">
      <Col>
        <br />
        <h3>Subchapter 1</h3>
        <Image src="Man.jpeg" roundedCircle />
        <br />
        <br />
        <ProgressBar now={0} />
      </Col>
      <Col>
        <br />
        <h3>Subchapter 2</h3>
        <Image src="Man.jpeg" roundedCircle />
        <br />
        <br />
        <ProgressBar now={0} />
      </Col>
    </Row>

  </Container>
  );
}
