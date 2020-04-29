import firestore from '@react-native-firebase/firestore';

export function hiraganaInit() {
    return dispatch => {
        firestore()
        .collection('Hiragana')
        .onSnapshot((QuerySnapshot)=>{
            dispatch({
                type: "HIRAGANA_INIT",
                payload: true
            });
        }, (error)=>{
            console.log("Error:" + error);
            dispatch({
                type: "HIRAGANA_INIT",
                payload: false
            });
        });
    };
}


export function SVGInit() {
    return dispatch => {
        firestore()
        .collection('SVG')
        .onSnapshot((QuerySnapshot)=>{
            dispatch({
                type: "SVG_INIT",
                payload: true
            });
        }, (error)=>{
            console.log("Error:" + error);
            dispatch({
                type: "SVG_INIT",
                payload: false
            });
        });
    };
}





