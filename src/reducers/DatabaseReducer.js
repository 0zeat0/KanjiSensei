const DatabaseReducer = (state = {
    Loaded: false,
    Connected: true
}, action) => {
    switch (action.type) {
        case "DATABASE_SET_LOADED":
            state = {
                ...state,
                Loaded: action.payload
            };
            break;
        case "DATABASE_SET_CONNECTED":
            state = {
                ...state,
                Connected: action.payload
            };
            break;
            default:
            break;
    }
    return state;
};

export default DatabaseReducer;