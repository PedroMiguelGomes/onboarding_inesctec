import React from "react";

import axios from 'axios';

import Form from "react-bootstrap/Form";
function Game() {
  return (
  <Form>
    <Form.Check 
	type="checkbox"
	id="checkbox"
	label="Find your ID RH"
	defaultChecked
    />
	<Form.Check 
    type="checkbox"
    id="checkbox"
    label="Task 2"
	//defaultChecked 
    />
	<Form.Check 
    type="checkbox"
    id="checkbox"
    label="Task 3"
	defaultChecked
    />
	<Form.Check 
    type="checkbox"
    id="checkbox"
    label="Task 4"
	//defaultChecked
    />
  </Form>
  );
}

export default Game;