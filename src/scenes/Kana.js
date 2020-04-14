import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';


import {vw} from "../utilities/Responsiveness";


class Home extends Component {
  render(){
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
            <Text>Kana</Text>
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

