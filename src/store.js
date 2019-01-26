import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middleWare = [thunk];

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  applymiddleWare(...middleWare)
);

export default store;
