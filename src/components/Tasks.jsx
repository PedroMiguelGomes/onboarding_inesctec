import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

import Form from "react-bootstrap/Form";
export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: []
    };
  }
  
  componentDidMount() {
    axios.get('https://run.mocky.io/v3/c8a5f315-1174-4b15-99d7-3e7292a550ea').then(res => {
      alert(res.data);
      
      this.setState( res.data );

    });
  }  
  render() {
    
    return (
      <div>
        {this.state.user.map((user) => (
          <Form>
            <Form.Check 
            type="checkbox"
            id="checkbox"
            label={user}
            />
          </Form>
        ))}
    </div>
    );
  }
}
