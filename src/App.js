import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Quiz, Tasks, Chap, Plus, Subchap, Logout } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/quiz"  exact component={() => <Quiz />} />
          <Route path="/tasks" exact component={() => <Tasks />} />
          <Route path="/chap" exact component={() => <Chap />} />
          <Route path="/plus" exact component={() => <Plus />} />
          <Route path="/subchap" exact component={() => <Subchap />} />
          <Route path="/logout" exact component={() => <Logout />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
