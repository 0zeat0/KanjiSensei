const KanaInfoReducer = (state = {
    Kana: {},
    OtherKana: {},
    SVG: {},
    Origin: {}
}, action) => {
    switch (action.type) {
        case "KANA_INFO_LOAD_KANA":
            state = {
                ...state,
                Kana: action.payload
            };
            break;
        case "KANA_INFO_LOAD_OTHER_KANA":
        state = {
            ...state,
            OtherKana: action.payload
        };
        break;
        case "KANA_INFO_LOAD_SVG":
            state = {
                ...state,
                SVG: action.payload
            };
            break;
        case "KANA_INFO_LOAD_ORIGIN":
            state = {
                ...state,
                Origin: action.payload
            };
            break;
            default:
            break;
    }
    return state;
};

export default KanaInfoReducer;