
export function setCount(count) {

    count++;
    if(count>5){
        count = 0;
    }

    return dispatch => {
            dispatch({
                type: "TEST_SET_COUNT",
                payload: count
        });
    }
}

