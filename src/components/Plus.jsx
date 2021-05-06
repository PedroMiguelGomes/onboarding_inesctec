import React, { useState } from "react";

import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "../App.css";

const App = () => (
  <Container className="p-3 header">
    <h1 className="">Subchapter</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <div style={{ width: 660, height: "auto" }}>
      <ResponsiveEmbed aspectRatio="16by9">
        <embed type="video/webm" src="bee.mp4" />
      </ResponsiveEmbed>
    </div>
  </Container>
);

export default App;
