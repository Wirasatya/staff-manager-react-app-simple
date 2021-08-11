import React from "react";
import ButtonAdd from "../buttonAdd/ButtonAdd";
import Filter from "../filter/Filter";
import SearchInput from "../searchInput/SearchInput";
import "./headerContent.scss";

const HeaderContent = () => {
  return (
    <div className="headerContent">
      <div className="topHeader">
        <h4 className="titleHeader">Staff Details</h4>
        <div className="createWrapp">
          <ButtonAdd></ButtonAdd>
        </div>
      </div>
      <div className="bottomHeader">
        <SearchInput></SearchInput>
        <Filter></Filter>
      </div>
    </div>
  );
};

export default HeaderContent;
