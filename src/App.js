import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchColors } from "./redux/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColors());
  }, []);

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
