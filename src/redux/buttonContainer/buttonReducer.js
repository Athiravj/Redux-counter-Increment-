import { ADD_NO } from "./buttonType";

const initialState = {
  num: 0,
};

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NO:
      return {
        ...state,
        num: state.num + 1,
      };
    default:
      return state;
  }
};

export default buttonReducer;
