import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import {connect} from "react-redux";
import { Actions } from 'react-native-router-flux';

import { setCount } from "../actions/TestActions";

class Test extends Component {

  tick() {
    let count = this.props.test.count;
    this.props.setCount(count);
    if(count==5){
      clearInterval(this.timerID);
      this.props.setCount(count);
      //Actions.test();
     }
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      500
    );
}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }



  render(){
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
         <Text style={styles.text}>{this.props.test.count}</Text>
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


const mapStateToProps = (state) => {
  return {
      test: state.test
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      setCount: (count) => {
          dispatch(setCount(count));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);

