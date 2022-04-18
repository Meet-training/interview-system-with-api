import React from "react";

import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";

import user_image from "../../assets/images/tuat.png";

import user_menu from "../../assets/JsonData/user_menus.json";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import authActions from "../../redux/Auth/action";

const curr_user = {
  display_name: "Admin ",
  image: user_image,
};

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const Topnav = () => {
  const dispatch = useDispatch();

  const renderUserMenu = (item, index) => (
    <Button onClick={logoutHandler} key={index}>
      <Link to="/">
        <div className="notification-item">
          <i className={item.icon}></i>
          <span>{item.content}</span>
        </div>
      </Link>
    </Button>
  );
  const logoutHandler = () => {
    localStorage.removeItem("auth_token");
    dispatch(authActions.logout());
  };

  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
