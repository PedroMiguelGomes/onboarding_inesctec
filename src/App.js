import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Quiz, Tasks, Chap, Plus, Subchap } from "./components";

import axios from 'axios';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/quiz" exact component={() => <Quiz />} />
          <Route path="/tasks" exact component={() => <Tasks />} />
          <Route path="/chap" exact component={() => <Chap />} />
          <Route path="/plus" exact component={() => <Plus />} />
          <Route path="/subchap" exact component={() => <Subchap />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
