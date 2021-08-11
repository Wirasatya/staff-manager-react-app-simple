import React from "react";
import "./buttonAdd.scss";

import { Add } from "@material-ui/icons";

const ButtonAdd = () => {
  return (
    <div className="buttonAdd">
      <button className="button">
        <span className="textButton">Create New</span>
        <span className="roundIcon">
          <Add className="iconAdd"></Add>
        </span>
      </button>
    </div>
  );
};

export default ButtonAdd;
