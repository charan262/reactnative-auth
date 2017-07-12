import React from 'react';
import {Text,View}from 'react-native';
const Header=(props)=>{
    const {textStyle,viewStyle}=styles;
    return( 
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}
const styles={
    viewStyle:{
        backgroundColor:'lightblue',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:15,
        shadowColor:'black',
        shadowOffset:{width:0, height:20},
        shadowOpacity:0.5
    },
    textStyle:{
     fontSize:30,
     

    }
}
export {Header};