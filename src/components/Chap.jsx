import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";


export default class Chap extends React.Component {
  
  state = {
    progress1: "",
    progress2: "",
    progress3: "",
  }


  componentDidMount() {
    setTimeout(() => {axios.get('https://blooming-island-42972.herokuapp.com/progressUser/' + JSON.parse(localStorage.getItem("user"))["id"] + '/').then(resp => {
        this.setState({ progress1: resp.data["progress"]["1"] });
        this.setState({ progress2: resp.data["progress"]["2"] });
        this.setState({ progress3: resp.data["progress"]["3"] });
    })}, 100);
  }

  render() {


    return (
      <Container>
        <br />
        <Row className="header">
          <Col>
            <h1>Acolhimento &amp; Integração</h1>
          </Col>
        </Row>
        <Row className="header">
          <Col>
            <br />
            <Link className="nav-link" to="/introducao">
              <h3>Introdução</h3>
              <Image src="inesctec.jpeg" roundedCircle />
              <br />
              <br />
              <ProgressBar now={this.state.progress1} />
            </Link>
          </Col>
          <Col>
            <br />
            <Link className="nav-link" to="/instituicao">
              <h3>Instituição</h3>
              <Image src="inesctec.jpeg" roundedCircle />
              <br />
              <br />
              <ProgressBar now={this.state.progress2} />
            </Link>
          </Col>
          <Col>
            <br />
            <Link className="nav-link" to="/tasksInst">
              <h3>Questões Práticas</h3>
              <Image src="inesctec.jpeg" roundedCircle />
              <br />
              <br />
              <ProgressBar now={this.state.progress3} />
            </Link>
          </Col>
        </Row>
      </Container >
    );
  }
}
