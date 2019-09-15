import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Router, Route } from "react-router-dom";

import theme from "./core/styles/theme";
import history from "./core/routing/history";
import Dashboard from "./features/dashboard/components/Dashboard";
import Home from "./features/home/components/Home";
import Signup from "./features/auth/components/Signup";
import Login from "./features/auth/components/Login";

function App(props) {
  const { isAuthorized } = props;

  return (
    <ThemeProvider theme={theme.light}>
      <Router history={history}>
        <Route exact path="/" component={isAuthorized ? Dashboard : Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.isAuthorized
  };
};

const withConnect = connect(
  mapStateToProps,
  null
);

export default compose(withConnect)(App);
