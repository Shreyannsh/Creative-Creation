import "../styles/Dashboard.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProgressBar from "../components/progressBar";

const Dashboard = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const isLoading = useSelector((state) => state.isLoading);
  const colorList = useSelector((state) => state.colorList);
  const filteredList = useSelector((state) => state.filteredList);
  const showAddCreation = useSelector((state) => state.showAddCreation);

  useEffect(() => {
    dispatch({ type: "serachFunction" });
  }, [filter]);

  return (
    <div
      style={{
        overflowY: showAddCreation ? "scroll" : null,
        maxHeight: showAddCreation ? "80vh" : null,
      }}
      className="dashboard"
    >
      <p className="title">Filter By</p>
      <div className="filterSection">
        <div>
          <p>color:</p>
          {isLoading ? (
            <img
              className="loader"
              src="https://i.gifer.com/ZKZg.gif"
              alt="loading"
            />
          ) : (
            <div className="colorList">
              {colorList.map((color) => (
                <div
                  key={color}
                  style={{ backgroundColor: color }}
                  className={
                    filter.color === color
                      ? "colorOptionSelected"
                      : "colorOption"
                  }
                  onClick={() =>
                    dispatch({ type: "addFilterColor", payload: color })
                  }
                ></div>
              ))}
              <div
                key="123"
                className="colorOption"
                onClick={() =>
                  dispatch({ type: "addFilterColor", payload: "" })
                }
              ></div>
            </div>
          )}
        </div>
        <div>
          <p>title/ subtitle:</p>
          <input
            type="text"
            placeholder="search across title & subtitle"
            className="searchArea"
            onChange={(e) =>
              dispatch({ type: "addSearchText", payload: e.target.value })
            }
          />
        </div>
      </div>
      <ProgressBar value={filteredList.length} />
      <div>
        <button
          onClick={() => dispatch({ type: "toggleShowAddCreation" })}
          disabled={showAddCreation || filteredList.length === 5 ? true : false}
        >
          + Add Creative
        </button>

        <div className="creationList">
          {filteredList.map((option) => (
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
