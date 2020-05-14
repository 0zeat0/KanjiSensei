import firestore from '@react-native-firebase/firestore';


export function kanjiLoad(level, set) {
    //console.log(level, set);
    return dispatch => {
        firestore()
        .collection('Kanji')
        .where('jlpt', '==', level).where('set', '==', set)
        .orderBy('position', 'asc')
        .onSnapshot((QuerySnapshot)=>{
            dispatch({
                type: "KANJI_LOAD",
                payload: QuerySnapshot
            });
        }, (error)=>{
            console.log("Error:" + error);
            dispatch({
                type: "KANJI_LOAD",
                payload: null
            });
        });
    };
}







