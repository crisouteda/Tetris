import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StyledWrapper } from "./Style";
import { Tetris, Snake } from "./Views";

function App() {
  return (
    <Router>
      <StyledWrapper>
        <Switch>
          <Route path="/" exact component={Tetris} />
          <Route path="/snake" exact component={Snake} />
        </Switch>
      </StyledWrapper>
    </Router>
  );
}

export default App;
