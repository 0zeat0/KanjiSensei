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
import {vh} from "../utilities/Responsiveness"; 

import {PlayIcon, SoundIcon, CustomSetIcon} from '../../assets/Icons';


import { kanaLoad } from "../actions/KanaInfoActions";
import { kanaLoadData } from "../actions/KanaInfoActions";
import { kanaClear } from "../actions/KanaInfoActions";
import { otherKanaLoad } from "../actions/KanaInfoActions";
import { svgLoad } from "../actions/KanaInfoActions";
import { setUpdate } from "../actions/KanaInfoActions";

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
    //this.props.kanaClear();
    //console.log(this.props);
    //console.log("start");
    //this.props.setNavigation(this.props.Navigation);
    //this.props.kanaLoadData(this.props.unicode, this.props.kana);

   // console.log(this.props);
   // this.props.kanaLoad(this.props.unicode, this.props.kana);
    //this.props.svgLoad(this.props.unicode);

    // let otherType = this.props.Kana.type=="hiragana"?"katakana":"hiragana";
    // let otherUnicode = this.props.Kana.otherKana;
    // this.props.otherKanaLoad(otherUnicode, otherType);

    this.props.kanaLoadData(this.props.unicode, this.props.kana);
    //this.props.setUpdate(true);
  }




  componentWillUnmount(){
    //console.log("unmount");

    // setTimeout(() => {  
    //   this.props.kanaClear();
    // }, 1000);

    this.props.kanaClear();
  }



  componentDidUpdate(){





    //console.log("update");
//console.log(this.props);

  //Actions.refresh();
     


    // setTimeout(()=>{

      // if(this.props.shouldUpdate && !this.props.Kana){
      //   this.props.kanaLoadData(this.props.unicode, this.props.kana);
      // }

      // }, 1000);



    // if(!this.props.Kana){
    //   this.props.kanaLoad(this.props.unicode, this.props.kana);
    // }

    // if(!this.props.SVG && this.props.Kana){
    //   this.props.svgLoad(this.props.unicode);
    // }


    // if(this.props.Kana && (!this.props.OtherKana || this.props.OtherKana.type==this.props.Kana.type)){
    //   let otherType = this.props.Kana.type=="hiragana"?"katakana":"hiragana";
    //   let otherUnicode = this.props.Kana.otherKana;
    //   this.props.otherKanaLoad(otherUnicode, otherType);
    // }
    
  }



  playSound(string){

    Tts.setDefaultLanguage('ja-JP');
    Tts.getInitStatus().then(() => {
      Tts.speak(string);
    });

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
      isLast = this.props.data.indexOf(characterDoc)==this.props.data.length-1;
      if(!isFirst){
        Prev = this.props.data[this.props.data.indexOf(characterDoc)-1].data();
      }
  
      if(!isLast){
        Next = this.props.data[this.props.data.indexOf(characterDoc)+1].data();
      }
     }


     if(this.props.Kana){
      return (
        <AppContainer>
        <ScrollContainer>
          {this.props.SVG?<AnimatedCharacter svg={this.props.SVG} setPlay={play => this.playChild = play} />:null}
          <View style={styles.RoundButtonsList}>
            <RoundButton fill="#99c3c3" icon={SoundIcon()} onPress={() => {this.playSound(this.props.Kana.japanese);}} />  
            <RoundButton fill="#abd9aa" icon={PlayIcon()} onPress={() => {this.playChild();}} />  
          </View>
          <Text style={styles.Header}>Info:</Text>
          <View style={styles.InfoList}>
            <InfoItem text="Romaji:" value={this.props.Kana.romaji} isLink={false} />
            {this.props.OtherKana?<InfoItem 
                                    text={this.props.Kana.type=="hiragana"?"Katakana:":"Hiragana:"} 
                                    value={this.props.OtherKana.japanese} 
                                    isLink={true} 
                                    onPress={()=>{ 
                                      this.props.kanaClear();
                                      //Actions.push("KanaInfo", {unicode: this.props.OtherKana.unicode, kana: this.props.OtherKana.type});
                                      Actions.refresh({unicode: this.props.OtherKana.unicode, kana: this.props.OtherKana.type, useNav:false });
                                      this.props.kanaLoadData(this.props.OtherKana.unicode, this.props.OtherKana.type);
                                     } } 
                                    hasSound={true} 
                                    isJapanese={true} />:null}
            <InfoItem text="Strokes:" value={this.props.Kana.strokes} isLink={false} />
            {/* <InfoItem 
              text="Origin:" 
              value={this.props.Kana.japanese} 
              isLink={true} 
              onPress={()=>{ 
                this.props.kanaClear();
                //Actions.push("KanaInfo", {unicode: this.props.OtherKana.unicode, kana: this.props.OtherKana.type});
                Actions.refresh({unicode: this.props.OtherKana.unicode, kana: this.props.OtherKana.type, useNav:false });
                this.props.kanaLoadData(this.props.unicode, this.props.kana);
                Actions.refresh({unicode: this.props.Kana.unicode, kana: this.props.Kana.type, data: this.props.data, useNav: true}); 
              } } 
              hasSound={true} 
              isJapanese={true} /> */}
            <InfoItem text="Unicode:" value={this.props.Kana.unicode} isLink={false} />
          </View> 
        </ScrollContainer>
        
  
        {this.props.useNav == true &&
          <View style={styles.SquareButtonsList}>
          {!isFirst?<SquareButton shouldFlex={1} text="PREV" onPress={()=>{
            //Actions.pop();
            this.props.kanaClear();
            Actions.refresh({
              unicode: Prev.unicode, 
              kana: Prev.type,
              data: this.props.data,
              useNav: true
            });
            this.props.kanaLoadData(Prev.unicode, Prev.type);
            }}  />:null}
          {!isLast?<SquareButton shouldFlex={1} text="NEXT"onPress={()=>{
            //Actions.pop();
            this.props.kanaClear();

            Actions.refresh({
              unicode: Next.unicode, 
              kana: Next.type,
              data: this.props.data,
              useNav: true
            });
            this.props.kanaLoadData(Next.unicode, Next.type);
            }}  />:null}
        </View>
        }
      </AppContainer>
      );

     }else {
      return (
        <AppContainer>
        </AppContainer>
      );
     }
  




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
  },
  Header: {
    top: vw(-14),
    fontSize: vw(6),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(5),
    letterSpacing: vw(0.2),
    margin: vw(1)
  }

  });



  const mapStateToProps = (state) => {
    return {
      Kana: state.KanaInfo.Kana,
      SVG: state.KanaInfo.SVG,
      OtherKana: state.KanaInfo.OtherKana,
      shouldUpdate: state.KanaInfo.shouldUpdate
    };
  };


  const mapDispatchToProps = (dispatch) => {
    return {
      kanaLoad: (unicode, kana) => {
        dispatch(kanaLoad(unicode, kana));
      },
      kanaLoadData: (unicode, kana) => {
        dispatch(kanaLoadData(unicode, kana));
      },
      kanaClear: () => {
        dispatch(kanaClear());
      },
      otherKanaLoad: (unicode, kana) => {
        dispatch(otherKanaLoad(unicode, kana));
      },
      svgLoad: (unicode) => {
        dispatch(svgLoad(unicode));
      },
      setUpdate: (update) => {
        dispatch(setUpdate(update));
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(KanaInfo);

