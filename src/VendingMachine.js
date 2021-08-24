import React from "react";
import { NavLink } from "react-router-dom";
import img from "./vendingmachine.jpg";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <>
      <nav className="NavBar">
        <NavLink exact to="/carrot">
          Carrot
        </NavLink>
        <NavLink exact to="/butterfinger">
          Butterfinger
        </NavLink>
        <NavLink exact to="/gatorade">
          Gatorade
        </NavLink>
      </nav>
      <div className="VendingMachine">
        <img src={img} alt="vending machine"></img>
      </div>
    </>
  );
};

export default VendingMachine;
