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


import { kanjiLoadData } from "../actions/KanjiInfoActions";
import { kanjiClear } from "../actions/KanjiInfoActions";


import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';
import AnimatedCharacter from '../components/AnimatedCharacter';
import RoundButton from '../components/RoundButton';
import SquareButton from '../components/SquareButton';
import InfoItem from '../components/InfoItem';
import KanjiExample from '../components/KanjiExample';
import thunk from 'redux-thunk';


class KanjiInfo extends Component {

  componentDidMount(){


   this.props.kanjiLoadData(this.props.unicode);

  }




  componentWillUnmount(){

    this.props.kanjiClear();
  }



  componentDidUpdate(){

    //console.log(this.props);
    
  }



  playSound(string){

    Tts.setDefaultLanguage('ja-JP');
    Tts.getInitStatus().then(() => {
      Tts.speak(string);
    });

  }



  render(){


     let kanjiDoc = null;
     let isFirst = true;
     let isLast = true;
     let Next = null;
     let Prev = null;

     
      if(this.props.useNav){
       kanjiDoc = this.props.data.find(element => element.data().unicode == this.props.unicode);
       isFirst = this.props.data.indexOf(kanjiDoc)==0;
       isLast = this.props.data.indexOf(kanjiDoc)==this.props.data.length-1;
       if(!isFirst){
         Prev = this.props.data[this.props.data.indexOf(kanjiDoc)-1].data();
       }
  
       if(!isLast){
         Next = this.props.data[this.props.data.indexOf(kanjiDoc)+1].data();
       }
      }



     if(this.props.Kanji){
      return (
        <AppContainer>
        <ScrollContainer>
          {this.props.SVG?<AnimatedCharacter svg={this.props.SVG} setPlay={play => this.playChild = play} />:null}
          <View style={styles.RoundButtonsList}>
            <RoundButton fill="#99c3c3" icon={SoundIcon()} onPress={() => {this.playSound(this.props.Kanji.onYomi+";"+this.props.Kanji.kunYomi);}} />  
            <RoundButton fill="#abd9aa" icon={PlayIcon()} onPress={() => {this.playChild();}} />  
            <RoundButton fill="#e1b6b6" icon={CustomSetIcon()} />  
          </View>
          <Text style={styles.Header}>Info:</Text>
          <View style={styles.InfoList}>
            <InfoItem text="Meaning:" value={this.props.Kanji.meaning} isLink={false} />
            <InfoItem text="On-yomi:" value={this.props.Kanji.onYomi} isLink={false} isJapanese={true} />
            <InfoItem text="Kun-yomi:" value={this.props.Kanji.kunYomi} isLink={false} isJapanese={true} />
            <InfoItem text="Strokes:" value={this.props.Kanji.strokes} isLink={false} />
            <InfoItem text="JLPT:" value={this.props.Kanji.jlpt==0?"Other":"N"+this.props.Kanji.jlpt} isLink={false} />
            <InfoItem text="Unicode:" value={this.props.Kanji.unicode} isLink={false} />
          </View>
          <Text style={styles.Header}>Examples:</Text>
          <View style={styles.InfoList}>
            {this.props.Examples.map((example, index) => (
              <KanjiExample key={example.english+index} jap={example.japanese} eng={example.english} fur={example.furigana} />
            ))}
          </View>
        </ScrollContainer>
        
  
        {this.props.useNav == true &&
          <View style={styles.SquareButtonsList}>
          {!isFirst?<SquareButton shouldFlex={1} text="PREV" onPress={()=>{
      
            this.props.kanjiClear();
            Actions.refresh({
              unicode: Prev.unicode, 
              data: this.props.data,
              useNav: true
            });
            this.props.kanjiLoadData(Prev.unicode);
            }}  />:null}
          {!isLast?<SquareButton shouldFlex={1} text="NEXT"onPress={()=>{
       
            this.props.kanjiClear();
            Actions.refresh({
              unicode: Next.unicode,
              data: this.props.data,
              useNav: true
            });
            this.props.kanjiLoadData(Next.unicode);
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
      Kanji: state.KanjiInfo.Kanji,
      SVG: state.KanjiInfo.SVG,
      Examples: state.KanjiInfo.Examples,
    };
  };


  const mapDispatchToProps = (dispatch) => {
    return {
      kanjiLoadData: (unicode) => {
        dispatch(kanjiLoadData(unicode));
      },
      kanjiClear: () => {
        dispatch(kanjiClear());
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(KanjiInfo);

