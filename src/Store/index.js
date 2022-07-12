import { createStore } from "redux";

//! creating reducers function
const reducersFn = (state = { counter: 0 }, action) => {
  //funciton tp  update the state
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return {
      counter: state.counter - 1,
    };
  }
  //   getting a payload
  if (action.type === "ADD") {
    return {
      counter: state.counter + action.payload,
    };
  }

  return state;
};

const store = createStore(reducersFn);
export default store;
