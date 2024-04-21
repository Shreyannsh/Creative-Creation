import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchColors } from "./redux/action";
import Drawer from "./containers/Drawer";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColors());
    dispatch({ type: "serachFunction" });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Dashboard />
        <Drawer />
      </main>
    </div>
  );
}

export default App;
