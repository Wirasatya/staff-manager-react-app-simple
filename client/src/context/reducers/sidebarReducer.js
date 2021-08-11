import { GLOBALTYPES } from "../globalTypes";

const sidebarReducer = (state, action) => {
  switch (action.type) {
    case GLOBALTYPES.SIDEBAR:
      return action.payload;
    default:
      return state;
  }
};

export default sidebarReducer;
