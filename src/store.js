import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["carts", "totalPrice"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

// const logger = ({ getState }) => {
//   return (next) => (action) => {
//     console.log("will dispatch", action);
//     const returnValue = next(action);
//     console.log("state after dispatch", getState());
//     return returnValue;
//   };
// };
const middleware = [thunk];
const enhancer = compose(applyMiddleware(...middleware));
// const store = createStore(reducer, enhancer);
// export default store;
export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
