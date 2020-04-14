import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import test from "./reducers/TestReducer";

export default createStore(
    combineReducers({
        test
    }),
    {},
    applyMiddleware(thunk)
);