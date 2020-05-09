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
import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';


class KanjiSet extends Component {

  componentDidMount() {
    let i = this.props.set;
    let setStart = i>1?i*10+1-10:i;
    let setEnd = i*10;
    if(this.props.level>0){
      this.props.navigation.setParams({
        title: "JLPT N"+this.props.level+" "+setStart+"-"+setEnd,
      });
    } else {
      this.props.navigation.setParams({
        title: "Other"+" "+setStart+"-"+setEnd,
      });
    }
    this.props.kanjiLoad(this.props.level, this.props.set);
 }


 componentDidUpdate(){
   console.log(this.props.Kanji);
 }

  render(){

    let sets = [];

    for(let i = 1; i<6; i++){
      sets.push(<Link key={"set"+i} text="Set 1-10" icon={CustomSetIcon()} background="#e3e3e3" color="#a4a4a4" href={Actions.push("JLPTSet", {level:this.props.level, set:i})}></Link>);
    }

    return (
      <AppContainer>
        <ScrollContainer>
            {/* <Link text="Set 1-10" icon={CustomSetIcon()} background="#e3e3e3" color="#a4a4a4" href={Actions.push("JLPT", {level:0})}></Link> */}
            {this.props.Kanji?<Text>{this.props.Kanji.docs[0].data().japanese}</Text>:null}
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

