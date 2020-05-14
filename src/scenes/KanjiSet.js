import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";

import { kanjiLoad } from "../actions/KanjiActions";

import {CustomSetIcon, KatakanaIcon} from '../../assets/Icons';

import Link from '../components/Link';
import KanjiSetItem from '../components/KanjiSetItem';
import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';


class KanjiSet extends Component {

  componentDidMount() {
    // let i = this.props.set;
    // let setStart = i>1?i*10+1-10:i;
    // let setEnd = i*10;
    // if(this.props.level>0){
    //   this.props.navigation.setParams({
    //     title: "JLPT N"+this.props.level+" "+setStart+"-"+setEnd,
    //   });
    // } else {
    //   this.props.navigation.setParams({
    //     title: "Other"+" "+setStart+"-"+setEnd,
    //   });
    // }
    this.props.kanjiLoad(this.props.level, this.props.set);
 }


 componentDidUpdate(){
   //console.log(this.props.Kanji);
 }

  render(){


    let items = [];

    if(this.props.Kanji){
      for(let i = 0; i<this.props.Kanji.docs.length; i++){
        let data = this.props.Kanji.docs[i].data();
        items.push(<KanjiSetItem key={"item"+i} index={i+1} data={data} onPress={()=>{
          Actions.push("KanjiInfo", {
            unicode: data.unicode,
            useNav: true,
            data: this.props.Kanji.docs});
        }}></KanjiSetItem>);
      }
    }

    return (
      <AppContainer>
        <ScrollContainer>
            {this.props.Kanji?items:null}
        </ScrollContainer>
      </AppContainer>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    Kanji: state.Kanji.Data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    kanjiLoad: (level, set) => {
      dispatch(kanjiLoad(level, set));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KanjiSet);

