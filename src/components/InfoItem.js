import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import Button from '../components/Button';


class InfoItem extends Component {

  
  render(){


    const styles = StyleSheet.create({
        item: {
            width: "100%",
            height: vh(6.5),
            backgroundColor: "#f6f6f6",
            borderRadius: vw(8),
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: vw(3),
            margin: vw(0.8)
        },
        text: {
            margin: vw(2),
            fontSize: vw(6),
            color: "#4b4b4b",
            fontFamily: "NotoSansJP-Regular",
            lineHeight: vh(5),
            letterSpacing: vw(-0.2)
        },
        value: {
            margin: vw(2),
            fontSize: this.props.isJapanese?vw(6.5):vw(6),
            color: this.props.isLink?"#72c8b9":"#4b4b4b",
            fontFamily: this.props.isJapanese?"NotoSerifJP-Regular":"NotoSansJP-Regular",
            lineHeight: vh(5),
            letterSpacing: vw(-0.2)
        }
        

    
      });


      return (
        <View style={styles.item}>
          <Text style={styles.text}>{this.props.text}</Text>
          <Button 
            isActive={this.props.isLink} 
            onPress={()=>{Actions.push("KanaInfo", {unicode: this.props.href.unicode, kana: this.props.href.kana});}} 
          >
            <Text style={styles.value}>{this.props.value}</Text>
          </Button>
        </View>
      );
  }
}


export default InfoItem;

