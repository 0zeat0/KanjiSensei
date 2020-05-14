import firestore from '@react-native-firebase/firestore';

export function search(query) {
    return dispatch => {
        let data = [];
        let found = null;
        firestore()
        .collection('Kanji')
        .onSnapshot((QuerySnapshot)=>{
            for(let i = 0; i<QuerySnapshot.docs.length; i++){
                if(query!=""){
                    query=query.toLowerCase();
                    if(QuerySnapshot.docs[i].data().unicode.includes(query)){
                        data.push(QuerySnapshot.docs[i].data());
                    }
                    if(QuerySnapshot.docs[i].data().japanese.includes(query)){
                        data.push(QuerySnapshot.docs[i].data());
                    }
                    if(QuerySnapshot.docs[i].data().meaning.includes(query)){
                        data.push(QuerySnapshot.docs[i].data());
                    }
                    if(QuerySnapshot.docs[i].data().kunYomi.includes(query)){
                        data.push(QuerySnapshot.docs[i].data());
                    }
                    if(QuerySnapshot.docs[i].data().onYomi.includes(query)){
                        data.push(QuerySnapshot.docs[i].data());
                    }
                }
            }
            if(data.length>0){
                found=true;
            }else if(data.length<=0){
                found=false;
            }
            if(query.length==0){
                found=null;
            }
            dispatch({
                type: "SEARCH_SET_DATA",
                payload: {data, found}
            });
        });
    };
}




export function setQuery(query) {
    return dispatch => {
            dispatch({
                type: "SEARCH_SET_QUERY",
                payload: query
            });
    };
}
export function setSearchTimer(time) {
    return dispatch => {
            dispatch({
                type: "SEARCH_SET_SEARCH_TIMER",
                payload: time
            });
    };
}




