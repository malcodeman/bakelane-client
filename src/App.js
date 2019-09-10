import React from "react";
import { ThemeProvider } from "styled-components";
import { Router, Route } from "react-router-dom";

import theme from "./core/styles/theme";
import history from "./core/routing/history";
import Home from "./features/home/components/Home";

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <Router history={history}>
        <Route exact path="/" component={Home} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
