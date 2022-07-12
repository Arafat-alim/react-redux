import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const selector = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch({ type: "INC" });
  };
  const handledec = () => {
    dispatch({ type: "DEC" });
  };

  const addValue = () => {
    dispatch({ type: "ADD", payload: 10 });
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
