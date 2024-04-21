import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchColors } from "./redux/action";
import Drawer from "./containers/Drawer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColors());
  }, []);

  return (
    <div className="App">
      <main>
        <Dashboard />
        <Drawer />
      </main>
    </div>
  );
}

export default App;
