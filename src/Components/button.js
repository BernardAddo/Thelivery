/* eslint-disable linebreak-style */
import React from 'react';
import { StyleSheet, TouchableOpacity ,Text, View } from 'react-native';


// eslint-disable-next-line react/prop-types
export default function Flatbutton({text, onPress}){
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.Buttontext}>{text}</Text>  
      </View>
    </TouchableOpacity>
  );
}

const styles= StyleSheet.create({
  button:{
    borderRadius:8,
    paddingHorizontal:14,
    paddingVertical:8,
    backgroundColor:'#A36BAE',
    marginTop:70,
    marginHorizontal:40

  },
  Buttontext:{
    color:'white',
    fontWeight:'600',
    fontSize:16,
    textTransform:'uppercase',
    textAlign:'center'

  }

});