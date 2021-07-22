import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "../../App.css";

export default function Logout(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const history = useHistory();
  setUser({});
  setUsername("");
  setPassword("");
  localStorage.clear();
  history.push("/");
  window.location.reload();
}

