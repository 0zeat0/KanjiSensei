import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Header extends Component {

  render(){


    let content;
    if(this.props.img){
      console.log(this.props.img);
      content = <Image style={styles.title} source={require(this.props.img)}></Image>;
    } else {
      console.log(this.props.title);
      content = <Text style={styles.title}>{this.props.title}</Text>;
    }




    return (
        <View style={styles.header}>
          {content}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0)"
  },
  title: {
    fontSize: 40
  }
});


export default Header;

