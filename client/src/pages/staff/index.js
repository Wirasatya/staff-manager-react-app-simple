import React, { useContext } from "react";
import "./staff.scss";

import ContentTable from "../../components/contentTable/ContentTable";
import HeaderContent from "../../components/contentTable/HeaderContent";
import { StateContext } from "../../context/StateProvider";
import ListCard from "../../components/listCard/ListCard";

const Staff = () => {
  const [{ mobile }] = useContext(StateContext);
  return (
    <div className="staff">
      <div className="contentWrapper">
        <HeaderContent></HeaderContent>
        {mobile ? <ListCard></ListCard> : <ContentTable></ContentTable>}
      </div>
    </div>
  );
};

export default Staff;
