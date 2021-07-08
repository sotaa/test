import { layoutTypes } from "../types/index";

const INITIAL_STATE = {
  currentLayout: "normal",
};
const languageReducer = (
  state = INITIAL_STATE,
  action: { payload: "normal" | "horizontal"; type: string }
) => {
  if (action.type === layoutTypes.SET_LAYOUT) {
    return {
      ...state,
      currentLayout: action.payload,
    };
  }
  return state;
};

export default languageReducer;
