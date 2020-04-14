const testReducer = (state = {
    count:0,
}, action) => {
    switch (action.type) {
        case "TEST_SET_COUNT":
            state = {
                ...state,
                count: action.payload
            };
            break;
            default:
            break;
    }
    return state;
};

export default testReducer;