import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Router, Route } from "react-router-dom";

import theme from "./core/styles/theme";
import history from "./core/routing/history";
import PrivateRoute from "./core/routing/PrivateRoute";
import Dashboard from "./features/dashboard/components/Dashboard";
import Home from "./features/home/components/Home";
import Signup from "./features/auth/components/Signup";
import Login from "./features/auth/components/Login";
import Orders from "./features/orders/components/Orders";
import NewOrder from "./features/orders/components/NewOrder";
import Account from "./features/account/components/Account";

function App(props) {
  const { isAuthorized, darkMode } = props;

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <Router history={history}>
        <Route exact path="/" component={isAuthorized ? Dashboard : Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute
          path="/orders"
          isAuthorized={isAuthorized}
          component={Orders}
        />
        <PrivateRoute
          path="/submit"
          isAuthorized={isAuthorized}
          component={NewOrder}
        />
        <PrivateRoute
          path="/account"
          isAuthorized={isAuthorized}
          component={Account}
        />
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.isAuthorized,
    darkMode: state.settings.darkMode
  };
};

const withConnect = connect(
  mapStateToProps,
  null
);

export default compose(withConnect)(App);
