import React, { Component, useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "../App.css";



class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ""
    };
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    console.log("You have submitted:", this.state.selectedOption);
  };

  render() {
    const select = this.state.selectedOption;
    return (
      <form onSubmit={this.handleFormSubmit} className="p-3">
        <div>Qual é a resposta certa?</div>
        <br />
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option1"
              checked={this.state.selectedOption === "option1"}
              onChange={this.handleOptionChange}
              className="form-check-input"
            />
            Option 1
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option2"
              checked={this.state.selectedOption === "option2"}
              onChange={this.handleOptionChange}
              className="form-check-input"
            />
            Option 2
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option3"
              checked={this.state.selectedOption === "option3"}
              onChange={this.handleOptionChange}
              className="form-check-input"
            />
            Option 3
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option4"
              checked={this.state.selectedOption === "option4"}
              onChange={this.handleOptionChange}
              className="form-check-input"
            />
            Option 4
          </label>
        </div>
        <div className="form-group">
          <button className="btn btn-primary mt-2" type="submit">
            Save
          </button>
        </div>
        <div>
          {select === "option3" ? (
            <Badge variant="success">Success</Badge>
          ) : select === "" ? (
            <div></div>
          ) : (
            <Badge variant="danger">Danger</Badge>
          )}
        </div>
      </form>
    );
  }
}

export default About;
