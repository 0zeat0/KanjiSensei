import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  Text
} from 'react-native';

import {connect} from "react-redux";
import { Actions } from 'react-native-router-flux';
import Tts from 'react-native-tts';

import {vw} from "../utilities/Responsiveness"; 

import {PlayIcon, SoundIcon, CustomSetIcon} from '../../assets/Icons';


import { kanaLoad } from "../actions/KanaInfoActions";
import { svgLoad } from "../actions/KanaInfoActions";

import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';
import AnimatedCharacter from '../components/AnimatedCharacter';
import RoundButton from '../components/RoundButton';
import SquareButton from '../components/SquareButton';
import InfoItem from '../components/InfoItem';
import thunk from 'redux-thunk';


class KanaInfo extends Component {


  componentDidMount(){
    //console.log(this.props);
    this.props.kanaLoad(this.props.unicode, this.props.kana);
    this.props.svgLoad(this.props.unicode);
  }

  componentWillUnmount(){
  
  }


  componentDidUpdate(){
    //console.log(this.props);
    //console.log(this.props.SVG);
  }



  playSound(string){

    Tts.setDefaultLanguage('ja-JP');
    Tts.getInitStatus().then(() => {
      Tts.speak(string);
    });

  }

  displayAnimatedCharacter(svg){
    console.log(svg);
    if(this.props.SVG!=undefined){
      return <AnimatedCharacter svg={svg} setPlay={play => this.playChild = play} />;
    } else {
      return null;
    }
  }


  render(){

    // const characterDoc = this.props.Hiragana.docs.find(element => element.data().unicode == this.props.unicode);
    // const character = characterDoc.data();

    // const svgDoc = this.props.SVG.docs.find(element => element.data().unicode == this.props.unicode);
    // const svg = svgDoc.data();

    // const otherKanaDoc = this.props[character.otherKana._documentPath._parts[0]].docs.find(element => element.data().unicode == character.otherKana._documentPath._parts[1]);
    // const otherKana = otherKanaDoc.data();

    // const originDoc = this.props[character.origin._documentPath._parts[0]].docs.find(element => element.data().unicode == character.origin._documentPath._parts[1]);
    // const origin = originDoc.data();


  



     let characterDoc = null;
     let isFirst = true;
     let isLast = true;
     let Next = null;
     let Prev = null;

     if(this.props.useNav){
      characterDoc = this.props.data.find(element => element.data().unicode == this.props.unicode);
      isFirst = this.props.data.indexOf(characterDoc)==0;
      isLast = this.props.data.indexOf(characterDoc)==this.props.data.length;
      if(!isFirst){
        Prev = this.props.data[this.props.data.indexOf(characterDoc)-1].data();
      }
  
      if(!isLast){
        Next = this.props.data[this.props.data.indexOf(characterDoc)+1].data();
      }
     }

    return (
      <AppContainer>
      <ScrollContainer>
        {!(Object.keys(this.props.SVG).length === 0 && this.props.SVG.constructor === Object)?<AnimatedCharacter svg={this.props.SVG} setPlay={play => this.playChild = play} />:null}
        <View style={styles.RoundButtonsList}>
          <RoundButton fill="#99c3c3" icon={SoundIcon()} onPress={() => {this.playSound(this.props.Kana.japanese);}} />  
          <RoundButton fill="#abd9aa" icon={PlayIcon()} onPress={() => {this.playChild();}} />  
          <RoundButton fill="#e1b6b6" icon={CustomSetIcon()} />  
        </View>
        <View style={styles.InfoList}>
          <InfoItem text="Romaji:" value={this.props.Kana.romaji} isLink={false} />
          <InfoItem text={this.props.Kana.type=="hiragana"?"Katakana:":"Hiragana:"} value={this.props.Kana.japanese} isLink={true} href={{ unicode:this.props.Kana.unicode, kana: this.props.Kana.type }} hasSound={true} isJapanese={true} />
          <InfoItem text="Strokes:" value={this.props.Kana.strokes} isLink={false} />
          <InfoItem text="Origin:" value={this.props.Kana.japanese} isLink={true} href={{ unicode:this.props.Kana.unicode, kana: this.props.Kana.type }} hasSound={true} isJapanese={true} />
          <InfoItem text="Unicode:" value={this.props.Kana.unicode} isLink={false} />
        </View> 
      </ScrollContainer>
      

      {this.props.useNav == true &&
        <View style={styles.SquareButtonsList}>
        {!isFirst?<SquareButton shouldFlex={1} text="PREV" onPress={()=>{
          Actions.pop();
          Actions.push("KanaInfo", {
            unicode: Prev.unicode, 
            kana: Prev.type,
            data: this.props.data,
            useNav: true
          });
          }}  />:null}
        {!isLast?<SquareButton shouldFlex={1} text="NEXT"onPress={()=>{
          Actions.pop();
          Actions.push("KanaInfo", {
            unicode: Next.unicode, 
            kana: Next.type,
            data: this.props.data,
            useNav: true
          });
          }}  />:null}
      </View>
      }
    </AppContainer>
    );
  }
}


const styles = StyleSheet.create({
  RoundButtonsList: {
      top: vw(-14),
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
  },
  InfoList: {
    top: vw(-14),
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: vw(1)
  },
  SquareButtonsList: {
    flexDirection: "row",
    justifyContent: "space-between"
  }

  });



  const mapStateToProps = (state) => {
    return {
      Kana: state.KanaInfo.Kana,
      SVG: state.KanaInfo.SVG
    };
  };


  const mapDispatchToProps = (dispatch) => {
    return {
      kanaLoad: (unicode, kana) => {
        dispatch(kanaLoad(unicode, kana));
      },
      svgLoad: (unicode) => {
        dispatch(svgLoad(unicode));
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(KanaInfo);

