import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing
} from 'react-native';

import Svg, {
    Path,
    Use,
    Defs,
    ClipPath,
  } from 'react-native-svg';


import {connect} from "react-redux";


import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";


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
          //console.log(this.props.svg);
            for(let i = 0; i < this.props.count; i++){
                let delay = i==0?0:this.props.svg.paths[i].length*25;
                //console.log(delay);
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

