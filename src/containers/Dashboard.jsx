import { useSelector } from "react-redux";
import "../styles/Dashboard.css";
import { useState } from "react";
import ProgressBar from "../components/progressBar";

const Dashboard = () => {
  const colorList = useSelector((state) => state.colorList);
  const creativeList = useSelector((state) => state.creativeList);

  const [selectedColor, setSelectedColor] = useState();

  return (
    <div className="dashboard">
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
        <button>+ Add Creative</button>
      </div>
    </div>
  );
};

export default Dashboard;
