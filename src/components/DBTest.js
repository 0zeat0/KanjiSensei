import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import { Actions } from 'react-native-router-flux';



class DBTest extends Component {


  constructor(){
    super();

    this.state = {
      value: null
    }

    this.onResult = this.onResult.bind(this);

  }


  onResult(QuerySnapshot) {
    console.log('Got Users collection result.');
    console.log(QuerySnapshot.docs[0].data().char);
    this.setState({value: QuerySnapshot.docs[0].data().char});
  }
  
  onError(error) {
    console.error(error);
  }

  componentDidMount(){
    firestore()
  .collection('Hiragana')
  .onSnapshot(this.onResult, this.onError);
  }

  componentDidUpdate(){
    console.log(this.state);
  }


  render(){
    
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.text}>Value:{this.state.value}</Text>
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
    fontSize: 50
  }
});




export default DBTest;

