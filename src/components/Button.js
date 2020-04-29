import React, {Component} from 'react';
import {
  TouchableOpacity,
  View
} from 'react-native';

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

class Button extends Component {


  onButtonPress(onPress){
      onPress();
  }
  

  render(){

    // const childrenWithProps = React.Children.map(this.props.children, child =>
    //   React.cloneElement(child, { style: this.props.childrenStyle })
    // );
    if(this.props.isActive == undefined || this.props.isActive == true){
      return (
        <TouchableOpacity
            style={this.props.parentStyle}
            onPress={()=>{this.onButtonPress(this.props.onPress);}}
            >
            {this.props.children}
        </TouchableOpacity>
    );
    } if(this.props.isActive == false){
      return (
        <View
            style={this.props.parentStyle}
            >
            {this.props.children}
        </View>
    );
    }

    
  }
}


export default Button;

