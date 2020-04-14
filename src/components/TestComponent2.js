import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

class Test2 extends Component {



  render(){
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
         <Text style={styles.text}>Test</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  scrollViewContent: {
    alignItems: "center"
  },
  text: {
    fontSize: 100
  }
});




export default Test2;

