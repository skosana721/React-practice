import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./about";
import Error from "./error";
import Home from "./home";
import Navbar from "./navbar";
import People from "./people";
import Person from "./person";

function Index() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/people" component={People} />
          <Route path="/about" component={About} />
          <Route path="/person/:id" children={<Person />} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default Index;
