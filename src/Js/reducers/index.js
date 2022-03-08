import { combineReducers } from "redux";
import taskReducer from "./Task";
const rootReducer = combineReducers({ taskReducer });
export default rootReducer;
