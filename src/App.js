import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Game, Chap, Plus, Content } from "./components";

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
          <Route path="/content" exact component={() => <Content />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
