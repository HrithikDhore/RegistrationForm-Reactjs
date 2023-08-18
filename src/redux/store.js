import {createStore,applyMiddleware} from "redux";
import mergeReducer from "./merge_reducers";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
const middelwares=[reduxThunk];

if(process.env.NODE_ENV==='development'){
middelwares.push(logger);
}
const store=createStore(mergeReducer,applyMiddleware(...middelwares));

export default store;