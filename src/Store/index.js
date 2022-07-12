import { createStore } from "react-redux";

//! creating reducers function
const reducersFn = ({ state = { counter: 0 }, action }) => {};

const store = createStore(reducersFn);
export default store;
