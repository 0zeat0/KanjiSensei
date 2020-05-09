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

import { katakanaLoad } from "../actions/KatakanaActions";

import KanaContainer from '../components/KanaContainer';
import AppContainer from '../components/AppContainer';
import KanaItem from '../components/KanaItem';
import SquareButton from '../components/SquareButton';

class Katakana extends Component {



  componentDidMount(){
    this.props.katakanaLoad();
  }

  componentWillUnmount(){
    //this.props.hiraganaClear();
  }

  

  render(){
  
      return (
        <AppContainer>
          <KanaContainer data={this.props.Katakana.docs} />
          <SquareButton text="TEST" onPress={()=>{Actions.push("KanaTestSelect", {data: this.props.Katakana.docs});}} />
        </AppContainer>
      );
  }

}



const mapStateToProps = (state) => {
  return {
    Katakana: state.Katakana.Data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    katakanaLoad: () => {
      dispatch(katakanaLoad());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Katakana);

