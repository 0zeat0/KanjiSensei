import React, {Component} from 'react';
import { View, Text, StyleSheet } from "react-native";
import NetInfo from "@react-native-community/netinfo";


import {connect} from "react-redux";

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import { dbLoad } from "../actions/DatabaseActions";
import { setConnected } from "../actions/DatabaseActions";


class Database extends Component {

  componentDidMount(){

    this.CheckConnectivity();

     this.props.dbLoad();

  }


  componentWillUnmount(){
    this.unsubscribe();
 }


  CheckConnectivity(){
    this.unsubscribe = NetInfo.addEventListener(state => {
      this.props.setConnected(state.isConnected);
    });
  }

  


  render(){
    if(this.props.Database.Connected){
      return (
        this.props.children
      );
    } else{
      return (
        <View style={styles.View}>
          <Text style={styles.Text}>Internet connection is required.</Text>
        </View>
      );
    }

  }

}


const styles = StyleSheet.create({
  View: {
      width: "100%",
      flex:1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: vw(10),
  },
  Text: {
      fontSize: vw(12),
      color: "#4b4b4b",
      fontFamily: "NotoSansJP-Regular",
      lineHeight: vh(10),
      letterSpacing: vw(-0.2),
      textAlign:"center"
  }

});



const mapStateToProps = (state) => {
  return {
    Database: state.Database
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dbLoad: () => {
      dispatch(dbLoad());
    }, 
    setConnected: (connected) => {
      dispatch(setConnected(connected));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Database);

