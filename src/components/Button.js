import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

class Button extends Component {
  render(){

    let arrow = "";
    if (this.props.isLink){
      arrow = ">";
    }


    return (
        <TouchableOpacity
            style={styles.button}
            onPress={this.props.onPress}>
            <Text style={styles.text}>{this.props.text}</Text>
            <Text style={styles.text}>{arrow}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    button: {
    width: "100%",
    backgroundColor: "#f6f6f6",
    borderRadius: vw(3),
    padding: vh(3.5),
    margin: vh(0.8),
    flexDirection: "row",
    alignItems: "center",
    justifyContent:  "space-between"
  },
  text: {
    fontSize: vw(8)
  }
});


export default Button;

