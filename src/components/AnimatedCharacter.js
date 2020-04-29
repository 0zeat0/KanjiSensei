import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing
} from 'react-native';

import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
    SvgCss 
  } from 'react-native-svg';


import {connect} from "react-redux";


import { Actions } from 'react-native-router-flux';

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import {ReadingIcon, WritinggIcon} from '../../assets/Icons';

import Link from '../components/Link';
import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';

import thunk from 'redux-thunk';
import { Value } from 'react-native-reanimated';

import { animatedCharacterInit } from "../actions/AnimatedCharacterActions";
import { animatedCharacterCount } from "../actions/AnimatedCharacterActions";



let AnimatedPath = Animated.createAnimatedComponent(Path);


class AnimatedCharacter extends Component {


    constructor(props) {
        super(props);
        this.Play = this.Play.bind(this);
     }

    componentDidMount(){
        this.props.setPlay(this.Play);
        this.Init();
    }

    componentDidUpdate(){
        this.Play();
    }

    Play(){
        this.Reset();
        if(this.props.object != undefined){
            for(let i = 0; i < this.props.count; i++){
                this.Draw("id"+i, this.props.svg.delays[i]);
            }
        }
    }

    Init(){
        this.props.animatedCharacterCount(this.props.svg);
        this.props.animatedCharacterInit(this.props.svg);
    }


    Reset(){
        for(let i = 0; i < this.props.count; i++){
            this.props.object["id"+i].setValue(3339);
        }
    }

    Draw(id, delay){
        Animated.timing(this.props.object[id],{
          toValue:0,
          duration:3000,
          useNativeDriver:true,
          easing: Easing.quad,
          delay: delay
        }).start();
      }

  render(){

    return (
        <View style={styles.AnimatedCharacter}>
            <Svg id={"svg"+this.props.svg.unicode} viewBox="0 0 1024 1024">

                {this.props.svg.clips.map((clip, i) => {          
                return (
                <Path 
                    key={"P"+this.props.svg.IDs[i]} 
                    id={"P"+this.props.svg.IDs[i]}
                    fill="#ccc"
                    d={clip}
                />
                ) 
                })}
           
                <Defs>
                    {this.props.svg.clips.map((clip, i) => {          
                    return (
                    <ClipPath
                        key={"C"+this.props.svg.IDs[i]} 
                        id={"C"+this.props.svg.IDs[i]}
                    >
                        <Use href={"#P"+this.props.svg.IDs[i]} />
                    </ClipPath>
                    ) 
                    })}
                </Defs>

                
                {this.props.svg.paths.map((path, i) => {          
                return (
                <AnimatedPath 
                    key={"AM"+this.props.svg.IDs[i]} 
                    id={"AM"+this.props.svg.IDs[i]}
                    strokeDashoffset={this.props.object["id"+i]}
                    strokeDasharray="3337"
                    strokeLinecap="round"
                    stroke="#4b4b4b"
                    fill="none"
                    strokeWidth="128"
                    clipPath={"url(#C"+this.props.svg.IDs[i]+")"}
                    d={path}
                />
                ) 
                })}

            </Svg>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    AnimatedCharacter: {
    top: vw(-14),
    width: vw(50),
    height: vw(50),
    padding: vw(0),
    flexDirection: "column",
    alignItems: "center",
    justifyContent:  "center"
  }
});


const mapStateToProps = (state) => {
  return {
    object: state.AnimatedCharacter.object,
    count: state.AnimatedCharacter.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    animatedCharacterInit: (svg) => {
      dispatch(animatedCharacterInit(svg));
    },
    animatedCharacterCount: (svg) => {
        dispatch(animatedCharacterCount(svg));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedCharacter);

