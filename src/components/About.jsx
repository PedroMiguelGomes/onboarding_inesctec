import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import axios from 'axios';

import "../App.css";

export default function Contact(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function validateForm() {
    return email.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(email=="teste" && password=="123"){
      let path = `/about`; 
      history.push(path);
    }else{
      setPassword("f");
      /*alert(email);*/
    }
  }
  return(
  <Container className="header">
      <Form className="p-4" onSubmit={handleSubmit}>
      <div>Qual é a resposta certa?</div>
      <br />
      <Form.Check
          type="radio"
          label="Opção 1"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="option1"
          onChange={(e) => {setEmail(e.target.value);setPassword("")}}
        />
        <Form.Check
          type="radio"
          label="Opção 2"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          value="option2"
          onChange={(e) => {setEmail(e.target.value);setPassword("")}}
        />
        <Form.Check
          type="radio"
          label="Opção 3"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
          value="option3"
          onChange={(e) => {setEmail(e.target.value);setPassword("")}}
        />
        <Form.Check
          type="radio"
          label="Opção 4"
          name="formHorizontalRadios"
          id="formHorizontalRadios4"
          value="option4"
          onChange={(e) => {setEmail(e.target.value);setPassword("")}}
        />
        <br />
        <Button variant="primary" type="submit" disabled={!validateForm()}>
          Responder
        </Button>
        <div disabled={!handleSubmit}>
          {password === "f" && email === "option3" ? (<Badge variant="success">Success</Badge>) : password === "f" ? (<Badge variant="danger">Danger</Badge>) : (<div></div>)}
        </div>
      </Form>
  </Container>
  );
}

