import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";

import {vw} from "../utilities/Responsiveness";

import { hiraganaLoad } from "../actions/HiraganaActions";

import KanaContainer from '../components/KanaContainer';
import AppContainer from '../components/AppContainer';
import KanaItem from '../components/KanaItem';
import SquareButton from '../components/SquareButton';

class Hiragana extends Component {



  componentDidMount(){
    this.props.hiraganaLoad();
  }

  componentWillUnmount(){
    //this.props.hiraganaClear();
  }

  


  render(){
  
      return (
        <AppContainer>
          <KanaContainer data={this.props.Hiragana.docs} />
        <SquareButton text="TEST" onPress={()=>{Actions.push("KanaTestSelect", {testItems: this.props.Hiragana.docs});}} />
        </AppContainer>
      );
  }

}



const mapStateToProps = (state) => {
  return {
    Hiragana: state.Hiragana.Data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hiraganaLoad: () => {
      dispatch(hiraganaLoad());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hiragana);

