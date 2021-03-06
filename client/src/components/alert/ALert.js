import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import { GLOBALTYPES } from "../../context/globalTypes";

import "./alert.scss";

import Loading from "./Loading";
import Toast from "./Toast";

const Alert = () => {
  const [{ alert }, dispatch] = useContext(StateContext);

  return (
    <div className="alert">
      {alert.loading && <Loading />}

      {alert.error && (
        <Toast
          msg={{ title: "Error", body: alert.error }}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          bgColor="error"
        />
      )}
      {alert.success && (
        <Toast
          msg={{ title: "Success", body: alert.success }}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          bgColor="success"
        />
      )}
    </div>
  );
};

export default Alert;
