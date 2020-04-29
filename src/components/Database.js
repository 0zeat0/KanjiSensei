import React, {Component} from 'react';


import {connect} from "react-redux";
import { hiraganaInit } from "../actions/DatabaseActions";
import { SVGInit } from "../actions/DatabaseActions";


class Database extends Component {

  componentDidMount(){

    this.props.hiraganaInit();
    this.props.SVGInit();

  }


  componentDidUpdate(){

     // console.log( this.props.Database);

  }

  


  render(){

      return (
        this.props.children
      );
  }

}


const mapStateToProps = (state) => {
  return {
    Database: state.Database
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hiraganaInit: () => {
      dispatch(hiraganaInit());
    },
    SVGInit: () => {
      dispatch(SVGInit());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Database);

