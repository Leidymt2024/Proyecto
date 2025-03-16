import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartSize }) => {
  return (
    <nav>
      <Link to="/"> Inicio </Link>
      <Link to="/carrito"> Carrito ({cartSize})</Link>
    </nav>
  );
};

export default Navbar;