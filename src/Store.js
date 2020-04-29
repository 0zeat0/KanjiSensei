import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import Database from "./reducers/DatabaseReducer";
import AnimatedCharacter from "./reducers/AnimatedCharacterReducer";
import Hiragana from "./reducers/HiraganaReducer";
import KanaInfo from "./reducers/KanaInfoReducer";

export default createStore(
    combineReducers({
        Database,
        AnimatedCharacter,
        Hiragana,
        KanaInfo
    }),
    {},
    applyMiddleware(thunk)
);