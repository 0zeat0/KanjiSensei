const KanaInfoReducer = (state = {
    Kana: null,
    OtherKana: null,
    SVG: null,
    Origin: null,
    shouldUpdate: false
}, action) => {
    switch (action.type) {
        case "KANA_INFO_LOAD_KANA":
            state = {
                ...state,
                Kana: action.payload
            };
            break;
        case "KANA_INFO_CLEAR":
            state = {
                ...state,
                Kana: action.payload,
                OtherKana: action.payload,
                SVG: action.payload,
                Origin: action.payload,
                shouldUpdate: false
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
        case "KANA_INFO_LOAD_DATA":
            state = {
                ...state,
                Kana: action.payload.character,
                OtherKana: action.payload.other,
                SVG: action.payload.svg,
                shouldUpdate: true
            };
            break;
        case "KANA_INFO_SET_UPDATE":
        state = {
            ...state,
            shouldUpdate: action.payload
        };
        break;
            default:
            break;
    }
    return state;
};

export default KanaInfoReducer;