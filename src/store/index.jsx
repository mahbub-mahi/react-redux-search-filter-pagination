import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers";

const rootReducers = combineReducers({
  Reducers,
});

//thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
