import React from "react";
import "./Header.scss";
import { Menu, Search } from "react-feather";
import Canvas from "../canvas/Canvas";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img className="logo" src="./logo.svg" alt="" />
        <p className="fs-24 title mb-0 text_primary">Codings Studio</p>
      </div>

      <div className="mid fs-16">
        <div class="input_group">
          <input type="text" placeholder="Search Your Products Dude..." />
          <Search className="fs-1 text-dark " />
        </div>
      </div>
    </div>
  );
};

export default Header;
