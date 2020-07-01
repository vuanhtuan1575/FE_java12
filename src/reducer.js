import {} from "./actions";
const initialState = {
  products: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "test":
      return { ...state };

    default:
      return state;
  }
};
export default reducer;
