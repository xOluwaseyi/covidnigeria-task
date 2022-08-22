import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { countryActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const toShow = useSelector((state) => state.country.toShow);

  return (
    <div className="App">
      {!toShow && <h1>Vite + React</h1>}
      <div className="card">
        <button onClick={() => dispatch(countryActions.toggle())}>count</button>
      </div>
    </div>
  );
}

export default App;
