const DatabaseReducer = (state = {
    HiraganaLoaded: false,
    KatakanaLoaded: false,
    KanjiLoaded: false,
    SVGLoaded: false
}, action) => {
    switch (action.type) {
        case "HIRAGANA_INIT":
            state = {
                ...state,
                HiraganaLoaded: action.payload
            };
            break;
        case "SVG_INIT":
            state = {
                ...state,
                SVGLoaded: action.payload
            };
            break;
            default:
            break;
    }
    return state;
};

export default DatabaseReducer;