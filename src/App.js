import { useSelector } from "react-redux";
function App() {
  const selector = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter</h1>
      <h3>{selector}</h3>
    </div>
  );
}

export default App;
