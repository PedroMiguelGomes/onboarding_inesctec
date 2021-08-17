import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, TasksInst, Chap, Logout, Introducao, Instituicao, TasksCESE } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/onboarding_inesctec" exact component={() => <Home />} />
          <Route path="/tasksInst" exact component={() => <TasksInst />} />
          <Route path="/chap" exact component={() => <Chap />} />
          <Route path="/introducao" exact component={() => <Introducao />} />
          <Route path="/instituicao" exact component={() => <Instituicao />} />
          <Route path="/tasksCESE" exact component={() => <TasksCESE />} />
          <Route path="/logout" exact component={() => <Logout />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
