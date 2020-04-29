import firestore from '@react-native-firebase/firestore';


export function hiraganaLoad() {
    return dispatch => {
        firestore()
        .collection('Hiragana')
        .onSnapshot((QuerySnapshot)=>{
            dispatch({
                type: "HIRAGANA_LOAD",
                payload: QuerySnapshot
            });
        }, (error)=>{
            console.log("Error:" + error);
            dispatch({
                type: "HIRAGANA_LOAD",
                payload: {}
            });
        });
    };
}



