import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import Database from "./reducers/DatabaseReducer";
import AnimatedCharacter from "./reducers/AnimatedCharacterReducer";
import Hiragana from "./reducers/HiraganaReducer";
import Katakana from "./reducers/KatakanaReducer";
import Kanji from "./reducers/KanjiReducer";
import KanaInfo from "./reducers/KanaInfoReducer";
import ReadingTest from "./reducers/ReadingTestReducer";

export default createStore(
    combineReducers({
        Database,
        AnimatedCharacter,
        Hiragana,
        Katakana,
        KanaInfo,
        ReadingTest,
        Kanji
    }),
    {},
    applyMiddleware(thunk)
);