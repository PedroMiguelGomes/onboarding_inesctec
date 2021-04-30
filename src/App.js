import React from "react";

import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Chapter1 />
        <Chapter2 />
      </div>
    )
  }
}