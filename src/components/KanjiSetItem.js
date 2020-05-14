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

import Button from './Button';


class KanjiSetItem extends Component {

  
  render(){
      return (
        <Button parentStyle={styles.item} onPress={this.props.onPress}>
          <Text style={styles.kanji}>{this.props.data.japanese}</Text>
            <View style={styles.mid}>
              <Text style={styles.japanese}>{this.props.data.onYomi+"；"+this.props.data.kunYomi}</Text>
              <Text style={styles.english}>{this.props.data.meaning}</Text>
            </View>
          <Text style={styles.index}>{this.props.index}</Text>
        </Button>
      );
  }

}

const styles = StyleSheet.create({
    item: {
        width: "100%",
        height: vh(13),
        backgroundColor: "#f6f6f6",
        borderRadius: vw(2),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        padding: vw(3)
    },
    kanji: {
      fontSize: vw(12),
      color: "#4b4b4b",
      fontFamily: "NotoSerifJP-Regular",
      lineHeight: vh(10),
      //backgroundColor: "#ccc",
      letterSpacing: vw(-0.2)
    },
    index: {
      fontSize: vw(7),
      color: "#a3a3a3",
      fontFamily: "NotoSansJP-Regular",
      lineHeight: vh(6),
      letterSpacing: vw(-0.2),
      //backgroundColor: "#ccc",
    },
    mid: {
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      //backgroundColor: "#ccc",

    },
    japanese: {
        fontSize: vw(6.5),
        color: "#4b4b4b",
        fontFamily: "NotoSerifJP-Regular",
        lineHeight: vh(5.5),
        letterSpacing: vw(-0.2),
        //backgroundColor: "#aaa",

    },
    english: {
        fontSize: vw(7),
        color: "#4b4b4b",
        fontFamily: "NotoSansJP-Regular",
        lineHeight: vh(6),
        letterSpacing: vw(-0.2),
        //backgroundColor: "#aaa",
    }
  });

export default KanjiSetItem;

