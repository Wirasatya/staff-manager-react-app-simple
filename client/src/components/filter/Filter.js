import { FilterList, Sort } from "@material-ui/icons";
import React, { useContext } from "react";
import "./filter.scss";

import { StateContext } from "../../context/StateProvider";

const Filter = () => {
  const [{ mobile }] = useContext(StateContext);
  return (
    <div className="filter">
      <div className="filterWrapper">
        <span className="textFilterIcon">
          <FilterList></FilterList>
          {mobile ? ": " : "filter: "}
        </span>
        <div className="seletWrapper">
          <select name="department" id="">
            <option value="">All</option>
            <option value="">Primary</option>
            <option value="">Preschool</option>
          </select>
        </div>
      </div>
      <div className="filterWrapper">
        <span className="textFilterIcon">
          <Sort></Sort>
          {mobile ? ": " : "sort by: "}
        </span>
        <div className="seletWrapper">
          <select name="sort-by" id="">
            <option value="">Newest</option>
            <option value="sort=oldest">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
