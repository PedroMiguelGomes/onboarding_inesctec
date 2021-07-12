import React, { useState } from "react";
import FlipPage from 'react-flip-page';
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Quiz, Tasks, Chap, Plus, Subchap } from "../components";
import axios from 'axios';

export default function App(){

return(
  <div className="p-3 header">
  <FlipPage  orientation="horizontal" width="400%" height="850" >  
  <article>
  <Router>
      <Switch>
        <Chap />
      </Switch>
  </Router>
  </article>
  <article>
  <Router>
      <Switch>
        <Tasks />
      </Switch>
  </Router>
  </article>
  <article>
    <h1>My excellent third article</h1>
    <p>My excellent third content</p>
  </article>
</FlipPage>
</div>
);

  /*const history = useHistory();
  setUser({});
  setUsername("");
  setPassword("");
  localStorage.clear();
  let path = `/`; 
  history.push(path);
  window.location.reload();*/
}

