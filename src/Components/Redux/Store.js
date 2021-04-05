import { createStore, applyMiddleware } from "redux";
//import reducerCombined from "./combineReducers";
// import thunk from "redux-thunk";
// import logger from "redux-logger";

const Store = createStore( applyMiddleware());

export default Store;
