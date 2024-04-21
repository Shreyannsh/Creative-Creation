import "../styles/Dashboard.css";
import "../styles/Drawer.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Drawer = () => {
  const dispatch = useDispatch();
  const colorList = useSelector((state) => state.colorList);
  const showAddCreation = useSelector((state) => state.showAddCreation);

  const [creation, setCreation] = useState({
    title: "",
    subtitle: "",
    color: "",
  });

  const isEmpty = Object.values(creation).includes("");
  console.log(isEmpty);

  const doneFunc = () => {
    dispatch({ type: "toggleShowAddCreation" });
    dispatch({ type: "addCreation", payload: creation });
    setCreation({
      title: "",
      subtitle: "",
      color: "",
    });
  };

  return (
    <div
      style={{ display: showAddCreation ? "block" : "none" }}
      className="drawer"
    >
      <header>
        <p className="title">Creative Creation</p>
        <span
          className="closeBtn"
          onClick={() => dispatch({ type: "toggleShowAddCreation" })}
        >
          X
        </span>
      </header>

      <div className="inputSection">
        <p>title</p>
        <input
          placeholder="This is title"
          onChange={(e) => setCreation({ ...creation, title: e.target.value })}
          value={creation.title}
        />
      </div>
      <div className="inputSection">
        <p>subtitle</p>
        <input
          placeholder="This is subtitle"
          onChange={(e) =>
            setCreation({ ...creation, subtitle: e.target.value })
          }
          value={creation.subtitle}
        />
      </div>

      <div className="inputSection">
        <p>background color</p>
        <div className="colorList">
          {colorList.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className={
                creation.color === color ? "colorOptionSelected" : "colorOption"
              }
              onClick={() => setCreation({ ...creation, color: color })}
            ></div>
          ))}
        </div>
      </div>

      <button
        className="doneBtn"
        disabled={isEmpty ? true : false}
        onClick={() => doneFunc()}
      >
        Done
      </button>
    </div>
  );
};
export default Drawer;
