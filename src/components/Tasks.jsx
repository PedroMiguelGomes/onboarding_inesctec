import React, { Component } from "react";
import axios from 'axios';

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
