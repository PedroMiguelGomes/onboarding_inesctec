import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "react-bootstrap/Image";
import PageNotFound from "./NotFound";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import chapter1 from "./Images/man.jpg";

export default class Chapter1 extends React.Component {

    render() {
        return (
            <Container>
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
                        {/*<Link class="nav-link" to="/notfound">*/}
                        <h3>Subchapter 1</h3>
                        <Image src={chapter1} roundedCircle className="levelImg"/>
                        <br />
                        <br />
                        <ProgressBar now={100} />
                        {/*</Link>*/}
                    </Col>
                    <Col>
                        <br />
                        {/*<Link class="nav-link" to="/">*/}
                        <h3>Subchapter 2</h3>
                        <Image src={chapter1} roundedCircle className="levelImg"/>
                        <br />
                        <br />
                        <ProgressBar now={100} />
                        {/*</Link>*/}
                    </Col>
                    <Col>
                        <br />
                        <h3>Subchapter 3</h3>
                        <Image src={chapter1} roundedCircle className="levelImg"/>
                        <br />
                        <br />
                        <ProgressBar now={60} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
