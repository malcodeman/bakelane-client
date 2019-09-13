import React from "react";
import { ThemeProvider } from "styled-components";
import { Router, Route } from "react-router-dom";

import theme from "./core/styles/theme";
import history from "./core/routing/history";
import Home from "./features/home/components/Home";
import Signup from "./features/auth/components/Signup";
import Login from "./features/auth/components/Login";

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
