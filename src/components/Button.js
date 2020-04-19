import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

class Button extends Component {
  render(){

    // const childrenWithProps = React.Children.map(this.props.children, child =>
    //   React.cloneElement(child, { style: this.props.childrenStyle })
    // );

    return (
        <TouchableOpacity
            style={this.props.parentStyle}
            onPress={this.props.onPress}>
            {this.props.children}
        </TouchableOpacity>
    );
  }
}




export default Button;

