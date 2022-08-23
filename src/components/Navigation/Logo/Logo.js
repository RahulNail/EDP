import React from "react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/">
    <img src={logo} alt="brand logo" />
  </Link>
);

export default Logo;
