import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/home";
import AboutMe from "../About/aboutMe";
import School from "../School/school";
import Piano from "../Piano/piano";
import Sports from "../Sports/sports";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/school" component={School} />
    <Route path="/piano" component={Piano} />
    <Route path="/sports" component={Sports} />
  </Switch>
);

export default Main;
