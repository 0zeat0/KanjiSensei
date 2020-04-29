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
  addHiragana(doc){


    let unics = [ 
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


    for(let i = 0; i < unics.length; i++){
      
      firestore()
      .collection('Hiragana')
      .doc(unics[i])
      .set({
        isEmpty: doc.isEmpty,
        japanese: doc.japanese,
        origin: doc.origin,
        otherKana: doc.otherKana,
        romaji: doc.romaji,
        strokes: doc.strokes,
        svg: doc.svg,
        type: doc.type,
        unicode: unics[i]
      })
      .then(() => {
        console.log('Item added:'+unics[i]);
      });

    }

      
  }


  render(){
    return (
      <AppContainer>
        <ScrollContainer>
          <Link text="Search" icon={ShearchIcon()} background="#d9f0f0" color="#788d8d" href={Actions.Kana}></Link>
          <Link text="Kana" icon={KanaIcon()} background="#daf0d9" color="#8c9e8b" href={Actions.Kana}></Link>
          <Link text="Kanji" icon={KanjiIcon()} background="#f0f0d9" color="#a8a885" href={Actions.Kana}></Link>
          <Link text="Custom sets" icon={CustomSetIcon()} background="#f0d9d9" color="#9f8c8c" href={Actions.Kana}></Link>
          {/* <Link text="Add Hiragana" 
          icon={CustomSetIcon()} background="#f0d9d9" 
          color="#9f8c8c" 
          href={()=>{this.addHiragana(this.props.Hiragana.docs[0].data());}}></Link> */}
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

