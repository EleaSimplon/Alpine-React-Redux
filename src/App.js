import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import ChangeColor from "./components/ChangeColor";
import ChangeRim from "./components/ChangeRims";
import ChangeSaddlery from "./components/ChangeSaddlery";


export default function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/colors">
            <ChangeColor />
          </Route>

          <Route path="/rims">
            <ChangeRim />
          </Route>

          <Route path="/saddlery">
            <ChangeSaddlery />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}