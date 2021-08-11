import { GLOBALTYPES } from "../globalTypes";

const mobileReducer = (state, action) => {
  switch (action.type) {
    case GLOBALTYPES.MOBILE:
      return action.payload;
    default:
      return state;
  }
};

export default mobileReducer;
