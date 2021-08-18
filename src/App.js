import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, TasksInst, Chap, Introducao, Instituicao, TasksCESE } from "./components";

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Navigation />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/tasksInst" exact component={() => <TasksInst />} />
          <Route path="/chap" exact component={() => <Chap />} />
          <Route path="/introducao" exact component={() => <Introducao />} />
          <Route path="/instituicao" exact component={() => <Instituicao />} />
          <Route path="/tasksCESE" exact component={TasksCESE} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
