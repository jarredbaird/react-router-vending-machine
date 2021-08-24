import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Butterfinger from "./Butterfinger";
import Carrot from "./Carrot";
import Gatorade from "./Gatorade";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/butterfinger">
          <Butterfinger />
        </Route>
        <Route exact path="/carrot">
          <Carrot />
        </Route>
        <Route exact path="/gatorade">
          <Gatorade />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
