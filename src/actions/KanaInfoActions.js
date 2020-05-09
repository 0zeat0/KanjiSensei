import firestore from '@react-native-firebase/firestore';


export function kanaLoad(unicode,kana) {

    //  console.log("args");
    //  console.log(unicode,kana);

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


export function kanaClear() {

    return dispatch => {
        dispatch({
            type: "KANA_INFO_CLEAR",
            payload: null
        });
    }

}

export function setUpdate(update) {

    return dispatch => {
        dispatch({
            type: "KANA_INFO_SET_UPDATE",
            payload: update
        });
    }

}



export function otherKanaLoad(unicode,kana) {

    console.log("args");
     console.log(unicode,kana);

    const type = kana.charAt(0).toUpperCase() + kana.slice(1)
    
    return dispatch => {
        firestore()
        .collection(type)
        .where('unicode', '==', unicode)
        .get()
        .then(QuerySnapshot => {
            dispatch({
                type: "KANA_INFO_LOAD_OTHER_KANA",
                payload: QuerySnapshot.docs[0].data()
            });
        }, (error)=>{
            console.log("Error:" + error);
            dispatch({
                type: "KANA_INFO_LOAD_OTHER_KANA",
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



export function kanaLoadData(unicode,kana) {

   // console.log(unicode,kana);

    const type = kana.charAt(0).toUpperCase() + kana.slice(1)

    let character = null;
    let other = null;
    let svg = null;

    return dispatch => {
        firestore()
        .collection(type)
        .where('unicode', '==', unicode)
        .get()
        .then(QuerySnapshotChar => {
            character = QuerySnapshotChar.docs[0].data();
            firestore()
            .collection("SVG")
            .where('unicode', '==', unicode)
            .get()
            .then(QuerySnapshotSVG => {
                svg = QuerySnapshotSVG.docs[0].data();
                firestore()
                .collection(character.type=="hiragana"?"Katakana":"Hiragana")
                .where('unicode', '==', character.otherKana)
                .get()
                .then(QuerySnapshotOther => {
                    other = QuerySnapshotOther.docs[0].data();
                    dispatch({
                        type: "KANA_INFO_LOAD_DATA",
                        payload: {character, other, svg}
                    });
                }
                );
            }
            );
        }
        );
    }
}
