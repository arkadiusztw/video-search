import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchVideo from "./views/searchVideo";
import PlayVideo from "./views/playVideo";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <SearchVideo />
          </Route>
          <Route exact path="/player">
            <PlayVideo />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
