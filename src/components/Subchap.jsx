import React from "react";

import axios from 'axios';

import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


const App = () => (
  <Container className="p-3 header">
    <h1 className="">Subchapter</h1>
    <div class="vid">
      <ResponsiveEmbed aspectRatio="16by9">
        <embed type="video/webm" src="guide.mp4" />
      </ResponsiveEmbed>
    </div>
    <p class="bigtext">
      Neste capitulo, vais aprender sobre algo.
      Acho que aqui temos de usar o Axios.
      <br />
      <Button href="/quiz">Questionario</Button>
    </p>
  </Container>
);

export default App;