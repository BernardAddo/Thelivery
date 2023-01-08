/* eslint-disable linebreak-style */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Flatbutton from './button';

export default function Places() {
  
  return(
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.test}>Star Bite Restaurant</Text>
        <Text style={styles.subtest}>West Legon, Accra</Text>
        <TouchableOpacity>
          <Text style={styles.button}>Remove</Text>
        </TouchableOpacity>
      </View>
      <Flatbutton text='ADD NEW LOCATION' />
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    top:40,
    height:'100%',
    justifyContent:'flex-start',
    marginHorizontal:10
  },

  test:{
    textAlign:'left',
    fontSize:17,
    color:'#A36BAE',
    paddingHorizontal:5,
    paddingVertical:5
    
  },
  subtest:{
    textAlign:'left',
    marginTop:1,
    paddingHorizontal:5

  },
  button:{
    textAlign:'right',
    fontSize:16,
    marginTop:4,
    fontWeight:'700',
    color:'#A36BAE',
    paddingHorizontal:5,
    paddingBottom:3
  },
  card:{
    borderRadius:6,
    elevation:3,
    backgroundColor:'white',
    shadowOffset:{width:1,height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    padding:7,
    margin:5
    
  }


  

});