import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';
import Button from '../components/Button';
import { Actions } from 'react-native-router-flux';

import {vw} from "../utilities/Responsiveness";

class Home extends Component {
  render(){


    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
         <Button text="Kana" isLink="true" onPress={() => {Actions.Kana();}}></Button>
         <Button text="Press me!" isLink={true}></Button>
         <Button text="Press me!" isLink={true}></Button>
         <Button text="Press me!" isLink={false}></Button>
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

