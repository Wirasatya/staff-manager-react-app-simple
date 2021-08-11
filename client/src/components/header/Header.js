import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import { GLOBALTYPES } from "../../context/globalTypes";
import "./header.scss";

import MenuHeader from "./menuHeader/MenuHeader";

const Header = () => {
  const [{ tablet, sidebar }, dispatch] = useContext(StateContext);

  const handleSidebar = () => {
    dispatch({
      type: GLOBALTYPES.SIDEBAR,
      payload: !sidebar,
    });
  };
  return (
    <div className="header">
      <div className="leftHeader">
        {tablet ? (
          <div
            onClick={handleSidebar}
            className={sidebar ? "hamburgerHeader active" : "hamburgerHeader"}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        ) : (
          <h3 className="titleHeader">ADMIN.</h3>
        )}

        {/* icon or something for title */}
      </div>
      <div className="rightHeader">
        <MenuHeader></MenuHeader>
      </div>
    </div>
  );
};

export default Header;
