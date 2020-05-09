const KanjiReducer = (state = {
    Data: null
}, action) => {
    switch (action.type) {
        case "KANJI_LOAD":
            state = {
                ...state,
                Data: action.payload
            };
            break;
            default:
            break;
    }
    return state;
};

export default KanjiReducer;