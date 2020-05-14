const SearchReducer = (state = {
    Query: "",
    Data: [],
    SearchTimer: 10,
    Found: null
}, action) => {
    switch (action.type) {
        case "SEARCH_SET_QUERY":
            state = {
                ...state,
                Query: action.payload
            };
            break;
        case "SEARCH_SET_DATA":
            state = {
                ...state,
                Data: action.payload.data,
                Found: action.payload.found
            };
            break;
        case "SEARCH_SET_SEARCH_TIMER":
            state = {
                ...state,
                SearchTimer: action.payload
            };
            break;
            default:
            break;
    }
    return state;
};

export default SearchReducer;