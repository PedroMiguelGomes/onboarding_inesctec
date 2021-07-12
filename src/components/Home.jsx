import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import axios from 'axios';
import "../App.css";

export default function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [now, setNow] = useState(true);
  const [user, setUser] = useState("");

  const history = useHistory();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    setUser("");
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  // login the user
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.get("https://run.mocky.io/v3/9127525c-5192-48b9-a97f-02ce0fcfaa84");
    if(username===response.data["name"] && password===response.data["password"]){
      setUser(response.data);
      localStorage.setItem("user" , JSON.stringify(response.data));
    }
  };

  // if there's a user show the message below
  if (user) {
    let path = `/chap`; 
    history.push(path);
    window.location.reload();
  }

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }


  return(
  <Container class="mx-auto" style={{ width:"300px"}}>
    <br />
      <Image src="logo.png" />
      <Form className="" onSubmit={handleSubmit} >
      <br />
        <Form.Group controlId="email" >
          <Form.Control 
          type="username" 
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
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