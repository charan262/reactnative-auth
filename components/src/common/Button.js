import React,{Component} from  'react';
import {Text,View,TouchableOpacity} from 'react-native';
const Button=(props)=>{
    const {buttonStyle,textStyle}=styles
    return(
        <View>
            <TouchableOpacity  onPress={props.onPress}style={buttonStyle}><Text style={textStyle}>{props.children}</Text></TouchableOpacity>
        </View>
    )
}
const styles={
    
    textStyle:{
       alignSelf:'center',
       color:'#007aff',
       fontSize:16,
       paddingTop:10,
       paddingBottom:10,
       paddingLeft:10,
       paddingRight:10 
    },
    buttonStyle:{
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5


    }
}
export { Button};