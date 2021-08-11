import React, { createContext, useReducer } from "react";
import alert from "./reducers/alertReducer";
import tablet from "./reducers/tabletReducer";
import sidebar from "./reducers/sidebarReducer";
import mobile from "./reducers/mobileReducer";

function combineReducers(reducers) {
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };
}

export const initialState = {
  alert: {
    loading: false,
    success: null,
    error: null,
  },
  tablet: false,
  sidebar: false,
  mobile: false,
};

export const StateContext = createContext();
// Build the provider
export const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider
      value={useReducer(
        combineReducers({
          alert,
          tablet,
          sidebar,
          mobile,
        }),
        initialState
      )}
    >
      {children}
    </StateContext.Provider>
  );
};
