import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

import "../App.css";

export default function Contact() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ind, setInd] = useState(0);
  const questions = [];

  const history = useHistory();

  function validateForm() {
    return email.length > 0;
  }

  function activateLasers() {
    setInd(ind+1);
    setEmail("");
    setPassword("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (email == "teste" && password == "123") {
      let path = `/about`;
      history.push(path);
    } else {
      setPassword("f");
      
      /*alert(email);*/
    }
  }

  return (
    <Container className="header">
      <Get url="https://run.mocky.io/v3/7482d1de-a002-4463-8c0c-46e274cb6f4f">
        {(error, response, isLoading, makeRequest, axios) => {
          if (error) {
            return (<div>Something bad happened: {error.message}</div>)
          }
          else if (isLoading) {
            return (<div>Loading...</div>)
          }
          else if (response !== null) {
            return (
              <Form className="p-4" onSubmit={handleSubmit}>
                <br />
                <div>
                  {response.data[ind]['question']}
                </div>
                <Form.Check
                  type="radio"
                  label={response.data[ind]['answer1']}
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  value="1"
                  onChange={(e) => { setEmail(e.target.value); setPassword("") }}
                />
                <Form.Check
                  type="radio"
                  label={response.data[ind]['answer2']}
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  value="2"
                  onChange={(e) => { setEmail(e.target.value); setPassword("") }}
                />
                <Form.Check
                  type="radio"
                  label={response.data[ind]['answer3']}
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                  value="3"
                  onChange={(e) => { setEmail(e.target.value); setPassword("") }}
                />
                <Form.Check
                  type="radio"
                  label={response.data[ind]['answer4']}
                  name="formHorizontalRadios"
                  id="formHorizontalRadios4"
                  value="4"
                  onChange={(e) => { setEmail(e.target.value); setPassword("") }}
                />
                <br />
                <Button variant="primary" type="submit" disabled={!validateForm()}>
                  Responder
                </Button>
                <Button variant="primary" onClick={activateLasers} disabled={!validateForm()}>
                  Proximo
                </Button>
                <div>
                  {password === "f" && email === response.data[ind]['correct'].toString() ? (<Badge variant="success">Success</Badge>) : password === "f" ? (<Badge variant="danger">Danger</Badge>) : (<div></div>)}
                </div>
              </Form>
            )
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get>
    </Container>
  );
}

