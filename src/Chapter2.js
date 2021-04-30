import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "react-bootstrap/Image";

import chapter1 from "./Images/man.jpg";

export default class Chapter2 extends React.Component {

    componentDidMount() {
        const apiUrl = 'https://run.mocky.io/v3/a9e7f77a-0e39-410a-8095-3e6db676c549';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => console.log('This is your data', data));
      }

    render() {
        return (
            <Container>
                <Row className="header">
                    <Col></Col>
                    <Col>
                        <h1>Chapter 2</h1>
                    </Col>
                    <Col></Col>
                </Row>
                <Row className="header">
                    <Col>
                        <br />
                        <h3>Subchapter 1</h3>
                        <Image src={chapter1} roundedCircle className="levelImg locked"/>
                        <br />
                        <br />
                        <ProgressBar now={0} />
                    </Col>
                    <Col>
                        <br />
                        <h3>Subchapter 2</h3>
                        <Image src={chapter1} roundedCircle className="levelImg locked"/>
                        <br />
                        <br />
                        <ProgressBar now={0} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
