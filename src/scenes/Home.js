import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import firestore from '@react-native-firebase/firestore';
import {connect} from "react-redux";

import {ShearchIcon, KanaIcon, KanjiIcon, CustomSetIcon} from '../../assets/Icons';

import Link from '../components/Link';
import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';

class Home extends Component {


  add(){

    // let ref;

    // firestore()
    //    .collection('Hiragana')
    //    .orderBy('position', 'asc')
    //    .onSnapshot((QuerySnapshot)=>{


    //  console.log(QuerySnapshot);
    //  ref = QuerySnapshot;


    //  for(let i = 0; i < ref.docs.length; i++){
      
    //   firestore()
    //   .collection('Katakana')
    //   .doc(romaji[i])
    //   .set({
    //     position: i,
    //     isEmpty: ref.docs[i].data().isEmpty,
    //     japanese: ref.docs[i].data().japanese,
    //     origin: ref.docs[i].data().origin,
    //     otherKana: ref.docs[i].data().unicode,
    //     romaji: ref.docs[i].data().romaji,
    //     strokes: ref.docs[i].data().strokes,
    //     type: "katakana",
    //     unicode: ref.docs[i].data().otherKana,
    //   })
    //   .then(() => {
    //     console.log('Item added:'+romaji[i]);
    //   });

    // }


       
    // }, (error)=>{
    //     console.log("Error:" + error);
    // });




    let hiragana = [ 
      "3042","3044","3046","3048","304a",
      "304b","304d","304f","3051","3053",
      "304c","304e","3050","3052","3054",
      "3055","3057","3059","305b","305d",
      "3056","3058","305a","305c","305e",
      "305f","3061","3064","3066","3068",
      "3060","3062","3065","3067","3069",
      "306a","306b","306c","306d","306e",
      "306f","3072","3075","3078","307b",
      "3070","3073","3076","3079","307c",
      "3071","3074","3077","307a","307d",
      "307e","307f","3080","3081","3082",
      "3084","3085-","3086","3087-","3088",
      "3089","308a","308b","308c","308d",
      "308f", "3090-", "3091-", "3091--","3092",
      "3093"
    ];



    let katakana = [ 
      "30a2","30a4","30a6","30a8","30aa",
      "30ab","30ad","30af","30b1","30b3",
      "30ac","30ae","30b0","30b2","30b4",
      "30b5","30b7","30b9","30bb","30bd",
      "30b6","30b8","30ba","30bc","30be",
      "30bf","30c1","30c4","30c6","30c8",
      "30c0","30c2","30c5","30c7","30c9",
      "30ca","30cb","30cc","30cd","30ce",
      "30cf","30d2","30d5","30d8","30db",
      "30d0","30d3","30d6","30d9","30dc",
      "30d1","30d4","30d7","30da","30dd",
      "30de","30df","30e0","30e1","30e2",
      "30e4","30e5-","30e6","30e7-","30e8",
      "30e9","30ea","30eb","30ec","30ed",
      "30ef", "30f0-", "30f1-", "30f1--","30f2",
      "30f3"
    ];


    let romaji = 
    [
      "A", "I", "U", "E", "O", 
      "KA", "KI", "KU", "KE", "KO", 
      "GA", "GI", "GU", "GE", "GO", 
      "SA", "SHI", "SU", "SE", "SO", 
      "ZA", "JI", "ZU", "ZE", "ZO", 
      "TA", "CHI", "TSU", "TE", "TO", 
      "DA", "DJI", "DZU", "DE", "DO", 
      "NA", "NI", "NU", "NE", "NO", 
      "HA", "HI", "FU", "HE", "HO", 
      "BA", "BI", "BU", "BE", "BO", 
      "PA", "PI", "PU", "PE", "PO", 
      "MA", "MI", "MU", "ME", "MO", 
      "YA", "EMPTY1", "YU", "EMPTY2", "YO", 
      "RA", "RI", "RU", "RE", "RO", 
      "WA", "EMPTY3", "EMPTY4", "EMPTY5", "WO", 
      "N", "EMPTY6", "EMPTY7", "EMPTY8", "EMPTY9"
    ]

   



    //  for(let i = 0; i < romaji.length; i++){
    //   firestore()
    //   .collection('Katakana')
    //   .doc(romaji[i])
    //   .set({
    //     position: i,
    //     isEmpty: false,
    //     japanese: "ア",
    //     origin: "30a2",
    //     otherKana: "3042",
    //     romaji: "A",
    //     strokes: 2,
    //     type: "katakana",
    //     unicode: "30a2"
    //   })
    //   .then(() => {
    //     console.log('Item added:'+romaji[i]);
    //   });

    // }


      
  }


  render(){
    return (
      <AppContainer>
        <ScrollContainer>
          <Link text="Search" icon={ShearchIcon()} background="#d9f0f0" color="#788d8d" href={Actions.Kana}></Link>
          <Link text="Kana" icon={KanaIcon()} background="#daf0d9" color="#8c9e8b" href={Actions.Kana}></Link>
          <Link text="Kanji" icon={KanjiIcon()} background="#f0f0d9" color="#a8a885" href={Actions.Kanji}></Link>
          <Link text="Custom sets" icon={CustomSetIcon()} background="#f0d9d9" color="#9f8c8c" href={Actions.Kana}></Link>
          {/* <Link text="Add" 
          icon={CustomSetIcon()} background="#f0d9d9" 
          color="#9f8c8c" 
          href={()=>{this.add();}}></Link> */}
        </ScrollContainer>
      </AppContainer>
    );
  }
}





const mapStateToProps = (state) => {
  return {
    Hiragana: state.Database.Hiragana
  };
};

export default connect(mapStateToProps)(Home);

