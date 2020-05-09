import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {CustomSetIcon, KatakanaIcon} from '../../assets/Icons';

import Link from '../components/Link';
import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';

class JLPTLevel extends Component {


  componentDidMount() {
    if(this.props.level>0){
      this.props.navigation.setParams({
        title: "JLPT N"+this.props.level,
      });
    } else {
      this.props.navigation.setParams({
        title: "Other",
      });
    }
 }


  render(){

    let sets = [];

    for(let i = 1; i<6; i++){
      let setStart = i>1?i*10+1-10:i;
      let setEnd = i*10;
      sets.push(<Link key={"set"+i} text={"Set "+setStart+"-"+setEnd} icon={CustomSetIcon()} background="#e3e3e3" color="#a4a4a4" href={()=>{Actions.push("KanjiSet", {level:this.props.level, set:i});}}></Link>);
    }

    return (
      <AppContainer>
        <ScrollContainer>
            {/* <Link text="Set 1-10" icon={CustomSetIcon()} background="#e3e3e3" color="#a4a4a4" href={Actions.push("JLPT", {level:0})}></Link> */}
            {sets}
        </ScrollContainer>
      </AppContainer>
    );
  }
}



export default JLPTLevel;

