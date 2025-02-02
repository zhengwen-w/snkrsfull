import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./Header";

import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NewsPage from "./NewsPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage.js";
import PageNotFound from "./PageNotFound";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Header />

        <main id="main" className="my-5 py-5">
          <Router>
            <Switch>
              <Route path="/" exact={true}>
                <HomePage />
              </Route>
              <Route path="/news/" exact={true}>
                <NewsPage />
              </Route>
              <Route path="/login/" exact={true}>
                <LoginPage />
              </Route>
              <Route path="/signup/" exact={true}>
                <SignupPage />
              </Route>
              <Route path="/about/" exact={true}>
                <AboutPage />
              </Route>
              <Route component={PageNotFound}></Route>
            </Switch>
          </Router>
        </main>
      </Fragment>
    );
  }
}
