import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Game, Chap, Plus } from "./components";

import axios from 'axios';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/game" exact component={() => <Game />} />
          <Route path="/chap" exact component={() => <Chap />} />
          <Route path="/plus" exact component={() => <Plus />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
