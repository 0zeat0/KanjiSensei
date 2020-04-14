import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

class Icon extends Component {
  render(){

    return (
        <View style={styles.button}>
            <Text style={styles.text}>{this.props.text}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    icon: {
    width: "100%",
    backgroundColor: this.props.backgroundColor,
    borderRadius: vw(3),
    padding: vh(3.5),
    margin: vh(0.8),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    fontSize: vw(8)
  }
});


export default Icon;

