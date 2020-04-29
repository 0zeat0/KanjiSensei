import firestore from '@react-native-firebase/firestore';


export function kanaLoad(unicode,kana) {

    const type = kana.charAt(0).toUpperCase() + kana.slice(1)
    return dispatch => {
        firestore()
        .collection(type)
        .where('unicode', '==', unicode)
        .get()
        .then(QuerySnapshot => {
            dispatch({
                type: "KANA_INFO_LOAD_KANA",
                payload: QuerySnapshot.docs[0].data()
            });
        }, (error)=>{
            console.log("Error:" + error);
            dispatch({
                type: "KANA_INFO_LOAD_KANA",
                payload: {}
            });
        });
    };
}


export function svgLoad(unicode) {
    return dispatch => {
        firestore()
        .collection('SVG')
        .where('unicode', '==', unicode)
        .get()
        .then(QuerySnapshot => {
            dispatch({
                type: "KANA_INFO_LOAD_SVG",
                payload: QuerySnapshot.docs[0].data()
            });
        }, (error)=>{
            console.log("Error:" + error);
            dispatch({
                type: "KANA_INFO_LOAD_SVG",
                payload: {}
            });
        });
    };
}





