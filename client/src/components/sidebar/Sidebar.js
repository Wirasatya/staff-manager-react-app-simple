import React, { useContext, useEffect } from "react";
import "./sidebar.scss";
import MenuSidebar from "./menuSidebar/MenuSidebar";
import { StateContext } from "../../context/StateProvider";
import { GLOBALTYPES } from "../../context/globalTypes";

const Sidebar = () => {
  const [{ sidebar, tablet }, dispatch] = useContext(StateContext);

  useEffect(() => {
    dispatch({
      type: GLOBALTYPES.SIDEBAR,
      payload: false,
    });
  }, [tablet, dispatch]);
  const styleSidebar = () => {
    if (tablet) {
      if (sidebar) {
        return { transform: "translateX(0%)" };
      } else {
        return { transform: "translateX(-100%)" };
      }
    } else {
      return { transform: "translateX(0%)" };
    }
  };
  return (
    <div style={styleSidebar()} className="sidebar">
      <div className="sidebarWrapper">
        <MenuSidebar></MenuSidebar>
      </div>
    </div>
  );
};

export default Sidebar;
