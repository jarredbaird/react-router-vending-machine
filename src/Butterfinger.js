import React from "react";
import { NavLink } from "react-router-dom";
import img from "./butterfinger.png";

const Butterfinger = () => {
  return (
    <div>
      <img src={img} alt="butterfinger"></img>
      <NavLink exact to="/">
        Back To VendingMachine
      </NavLink>
    </div>
  );
};

export default Butterfinger;
