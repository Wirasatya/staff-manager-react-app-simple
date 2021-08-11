import React from "react";
import "./menuSidebar.scss";

import { Link } from "react-router-dom";
import {
  BarChart,
  GroupAdd,
  HomeOutlined,
  PeopleAlt,
  Report,
  Timeline,
} from "@material-ui/icons";

const MenuSidebar = () => {
  return (
    <>
      <div className="menuSidebar">
        <h3 className="title">Dashboard</h3>
        <ul className="list">
          <li className="listItem">
            <Link className="link" to="/">
              <HomeOutlined className="sidebarIcon"></HomeOutlined>
              Home
            </Link>
          </li>
          <li className="listItem">
            <Link to="/" className="link">
              <Timeline className="sidebarIcon"></Timeline>
              Analytics
            </Link>
          </li>
        </ul>
      </div>
      <div className="menuSidebar">
        <h3 className="title">Quick Menu</h3>
        <ul className="list">
          <li className="listItem active">
            <Link className="link" to="/">
              <PeopleAlt className="sidebarIcon"></PeopleAlt>
              Staff Details
            </Link>
          </li>
          <li className="listItem">
            <Link to="/" className="link">
              <GroupAdd className="sidebarIcon"></GroupAdd>
              Add Staff
            </Link>
          </li>
          <li className="listItem">
            <Link className="link" to="/">
              <BarChart className="sidebarIcon"></BarChart>
              Reports
            </Link>
          </li>
          <li className="listItem">
            <Link to="/" className="link">
              <Timeline className="sidebarIcon"></Timeline>
              Analytics
            </Link>
          </li>
        </ul>
      </div>
      <div className="menuSidebar">
        <h3 className="title">Staff</h3>
        <ul className="list">
          <li className="listItem">
            <Link className="link" to="/">
              <PeopleAlt className="sidebarIcon"></PeopleAlt>
              Manage
            </Link>
          </li>
          <li className="listItem">
            <Link to="/" className="link">
              <Report className="sidebarIcon"></Report>
              Report
            </Link>
          </li>
          <li className="listItem">
            <Link to="/" className="link">
              <Timeline className="sidebarIcon"></Timeline>
              Analytics
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuSidebar;
