import {
  LOGIN_PROCESS,
  CREATE_ACTION,
  RESET_ACTION,
  FIND_ALL_CATEGORY,
} from "./actions";
const initialState = {
  statusLogin: -1,
  statusAction: -1,
  products: [],
  categorys: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PROCESS:
      return { ...state, statusLogin: action.statusLogin };
    case CREATE_ACTION:
      return { ...state, statusAction: action.statusAction };

    case RESET_ACTION:
      return { ...state, statusAction: action.statusAction };
    case FIND_ALL_CATEGORY:
      return {
        ...state,
        statusAction: action.statusAction,
        categorys: action.listCategory,
      };
    default:
      return { ...state, statusLogin: -1 };
  }
};
export default reducer;
