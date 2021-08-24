import React from "react";
import { NavLink } from "react-router-dom";
import img from "./carrot.jpg";

const Carrot = () => {
  return (
    <div>
      <img src={img} alt="carrot"></img>
      <NavLink exact to="/">
        Back To VendingMachine
      </NavLink>
    </div>
  );
};

export default Carrot;
