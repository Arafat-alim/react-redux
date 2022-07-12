import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions } from "./Store/index";

function App() {
  const selector = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleInc = () => {
    // dispatch({ type: "INC" });
    dispatch(actions.increment());
  };
  const handledec = () => {
    // dispatch({ type: "DEC" });
    dispatch(actions.decrement());
  };

  const addValue = () => {
    // dispatch({ type: "ADD", payload: 10 });
    dispatch(actions.addByValue(10));
  };
  return (
    <div>
      <h1>Counter</h1>
      <h3>{selector}</h3>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handledec}>Increment</button>
      <button onClick={addValue}>Add Value by 10</button>
    </div>
  );
}

export default App;
