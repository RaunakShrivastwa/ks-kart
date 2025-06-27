import React, { useState } from "react";
import "./Header.scss";
import { Menu, Search, User } from "react-feather";
import Canvas from "../canvas/Canvas";
import { Link } from "react-router-dom";
import ProfileDropdown from "./profileDropdown/ProfileDropdown";

const Header = () => {
  const [show, setShow] = useState(false);
  

  return (
    <div className="header">
      <div className="left">
             <img className="profile pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRCFKLR7qYTjM2rj6UrbrWMdGVRB4NBOgNspwpR27QJsyQAo0q2jDeaxZgrGWcxWKfHA&usqp=CAU" alt="" />

        <h3 className="title mb-0 text_primary">Codings Studio</h3>
      </div>

      <div className="mid fs-16">
        <div class="input_group">
          <input type="text" placeholder="Search Your Products Dude..." />
          <Search className="fs-1 text-dark " />
        </div>
      </div>


      <img className="profile pointer" onClick={() => setShow(!show)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRCFKLR7qYTjM2rj6UrbrWMdGVRB4NBOgNspwpR27QJsyQAo0q2jDeaxZgrGWcxWKfHA&usqp=CAU" alt="" />
      {
        show && <div className="profile_div">
          <ProfileDropdown />
        </div>
      }
    </div>
  );
};

export default Header;
