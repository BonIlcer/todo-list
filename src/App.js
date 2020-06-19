import React from "react";
import "./App.css";
import "./ToDoList/ToDoList";
import ToDoList from "./ToDoList/ToDoList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <ToDoList />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function About() {
  return <h2>About project</h2>;
}

export default App;
