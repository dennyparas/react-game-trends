import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./features/home/HomePage";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
