import { GLOBALTYPES } from "../globalTypes";

const tabletReducer = (state, action) => {
  switch (action.type) {
    case GLOBALTYPES.TABLET:
      return action.payload;
    default:
      return state;
  }
};

export default tabletReducer;
