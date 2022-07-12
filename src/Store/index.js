import { createStore } from "redux";

//! creating reducers function
const reducersFn = ({ state = { counter: 0 }, action }) => {
  return state;
};

const store = createStore(reducersFn);
export default store;
