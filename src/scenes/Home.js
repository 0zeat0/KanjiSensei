import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import {vw} from "../utilities/Responsiveness";

import {ShearchIcon, KanaIcon, KanjiIcon, CustomSetIcon} from '../../assets/Icons';

import Link from '../components/Link';

class Home extends Component {
  render(){


    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
         <Link text="Search" icon={ShearchIcon()} background="#d9f0f0" color="#788d8d" href={Actions.Kana}></Link>
         <Link text="Kana" icon={KanaIcon()} background="#daf0d9" color="#8c9e8b" href={Actions.Kana}></Link>
         <Link text="Kanji" icon={KanjiIcon()} background="#f0f0d9" color="#a8a885" href={Actions.Kana}></Link>
         <Link text="Custom sets" icon={CustomSetIcon()} background="#f0d9d9" color="#9f8c8c" href={Actions.Kana}></Link>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
    borderTopLeftRadius: vw(7),
    borderTopRightRadius: vw(7)
  },
  scrollViewContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    padding: vw(6)
  }
});




export default Home;

