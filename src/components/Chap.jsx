import React from "react";

import axios from 'axios';
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
import Chap1 from "./Chap1.jsx"
import Chap2 from "./Chap2.jsx"
const App = () => (
  <Container>
	<Chap1 />
	<Chap2 />
  </Container>
);

export default App;
