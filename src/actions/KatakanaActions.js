import firestore from '@react-native-firebase/firestore';


export function katakanaLoad() {
    return dispatch => {
        firestore()
        .collection('Katakana')
        .orderBy('position', 'asc')
        .onSnapshot((QuerySnapshot)=>{
            dispatch({
                type: "KATAKANA_LOAD",
                payload: QuerySnapshot
            });
        }, (error)=>{
            console.log("Error:" + error);
            dispatch({
                type: "KATAKANA_LOAD",
                payload: {}
            });
        });
    };
}



