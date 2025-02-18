import React from "react";
import "./App.css";
import ToDoList from "./ToDoList/ToDoList";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-bar">
          <img className="logo" src={logo} alt="logo"></img>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/">
            <h2>To Do</h2>
            <ToDoList />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
