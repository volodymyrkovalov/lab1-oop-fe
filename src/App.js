import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import UserList from "./components/UserList";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/books" component={BookList} />
          <Route path="/users" component={UserList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
