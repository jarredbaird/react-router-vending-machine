import React from "react";
import { NavLink } from "react-router-dom";
import img from "./gatorade.jpeg";

const Gatorade = () => {
  return (
    <div>
      <img src={img} alt="gatorade"></img>
      <NavLink exact to="/">
        Back To VendingMachine
      </NavLink>
    </div>
  );
};

export default Gatorade;
