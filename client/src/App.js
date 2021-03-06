import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import UhOh404 from "./pages/UhOh404";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Nav />
        <Jumbotron>
          <h1>Test</h1>
        </Jumbotron>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={UhOh404} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
