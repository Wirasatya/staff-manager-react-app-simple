import React, { useState } from "react";
import "./menuHeader.scss";

import { AccountCircle, ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import DropdownHeader from "../dropdownHeader/DropdownHeader";

const MenuHeader = () => {
  const [showDD, setShowDD] = useState(false); //dropdown show

  const handleDropdDown = () => {
    setShowDD(!showDD);
  };
  return (
    <div className="menuHeader">
      {showDD && <DropdownHeader></DropdownHeader>}

      <span onClick={handleDropdDown}>
        {showDD ? <ArrowDropUp></ArrowDropUp> : <ArrowDropDown></ArrowDropDown>}
      </span>
      <IconButton size="small" className="iconButton">
        <AccountCircle className="avatarIcon"></AccountCircle>
      </IconButton>
    </div>
  );
};

export default MenuHeader;
