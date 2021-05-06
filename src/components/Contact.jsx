import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import "../App.css";

export default function Contact(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(email=="teste" && password=="123"){
      let path = `/about`; 
      history.push(path);
    }else{
      alert("Essa conta não existe");
    }
  }
  return(
  <Container className="header">
      <Image src="logo.png" />
      <Form className="p-4" onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Control 
          type="username" 
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        
      </Form>
  </Container>
  );
}

