import React from "react";

import { Link } from "react-router-dom";

import "./sidebar.css";

import sidebar_items from "../../assets/JsonData/sidebar_routes.json";

import { Divider } from "@mui/material";

import { useSelector } from "react-redux";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const isShowUser = useSelector((state) => state.auth.user?.role?.name);

  function ShowUserCondition() {
    if (isShowUser === "admin" || isShowUser === "hr") {
      return true;
    }
    return false;
  }
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );

  return (
    <div className="sidebar">
      <div className="sidebar__logo">Interview System</div>
      <Divider variant="middle" sx={{ mb: 2 }} />
      <Link to="/result">
        <SidebarItem
          title="Interview Result"
          icon="bx bx-table"
          active={0 === activeItem}
        />
      </Link>
      {ShowUserCondition() && (
        <Link to="/users">
          <SidebarItem
            title="Users"
            icon="bx bxs-user"
            active={1 === activeItem}
          />
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
