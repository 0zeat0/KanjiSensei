import firestore from '@react-native-firebase/firestore';

export function dbLoad() {
    return dispatch => {
        firestore()
        .collection('Hiragana')
        .onSnapshot(()=>{
            firestore()
            .collection('Katakana')
            .onSnapshot(()=>{
                firestore()
                .collection('Kanji')
                .onSnapshot(()=>{
                    firestore()
                    .collection('SVG')
                    .onSnapshot(()=>{
                        firestore()
                        .collection('Examples')
                        .onSnapshot(()=>{
                            dispatch({
                                type: "DATABASE_SET_LOADED",
                                payload: true
                            });
                        });
                    });
                });
            });
        });
    };
}



export function setConnected(connected) {
    return dispatch => {
            dispatch({
                type: "DATABASE_SET_CONNECTED",
                payload: connected
            });
    };
}




