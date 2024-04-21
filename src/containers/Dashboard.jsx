import { useDispatch, useSelector } from "react-redux";
import "../styles/Dashboard.css";
import { useState } from "react";
import ProgressBar from "../components/progressBar";

const Dashboard = () => {
  const dispatch = useDispatch();
  const colorList = useSelector((state) => state.colorList);
  const creativeList = useSelector((state) => state.creativeList);
  const showAddCreation = useSelector((state) => state.showAddCreation);
  const [selectedColor, setSelectedColor] = useState();

  return (
    <div
      style={{
        overflowY: showAddCreation ? "scroll" : null,
        maxHeight: showAddCreation ? "93vh" : null,
      }}
      className="dashboard"
    >
      <p className="title">Filter By</p>
      <div className="filterSection">
        <div>
          <p>color:</p>
          <div className="colorList">
            {colorList.map((color) => (
              <div
                key={color}
                style={{ backgroundColor: color }}
                className={
                  selectedColor === color
                    ? "colorOptionSelected"
                    : "colorOption"
                }
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}

            {/* <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div> */}
          </div>
        </div>
        <div>
          <p>title/ subtitle:</p>
          <input
            type="text"
            placeholder="search across title and subtitle"
            className="searchArea"
          />
        </div>
      </div>
      <ProgressBar value={creativeList.length} />
      <div>
        <button
          onClick={() => dispatch({ type: "toggleShowAddCreation" })}
          disabled={showAddCreation ? true : false}
        >
          + Add Creative
        </button>

        <div className="creationList">
          {creativeList.map((option) => (
            <div
              className="creationDiv"
              style={{ backgroundColor: option.color }}
            >
              <h1>{option.title}</h1>
              <h3>{option.subtitle}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
