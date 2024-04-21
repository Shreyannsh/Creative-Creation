import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { creativeReducer } from "./reducer";

const store = createStore(creativeReducer, applyMiddleware(thunk));

export default store;
