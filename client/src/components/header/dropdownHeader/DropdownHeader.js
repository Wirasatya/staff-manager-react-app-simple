import { Brightness4, Language } from "@material-ui/icons";
import React from "react";
import "./dropdownHeader.scss";

const DropdownHeader = () => {
  return (
    <ul className="dropdownHeader">
      <li>
        <span>Profile</span>
      </li>
      <li>
        <span>
          <Language className="ddIcon"></Language>
        </span>
      </li>
      <li>
        <span>
          <Brightness4 className="ddIcon"></Brightness4>
        </span>
      </li>
      <span>Logout</span>
    </ul>
  );
};

export default DropdownHeader;
