/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable linebreak-style */
import React from 'react';
import { View,StyleSheet,StatusBar,Text,TouchableOpacity } from 'react-native';

export default function page1() {
  return(
    <View style={styles.Container}>
      <StatusBar translucent backgroundColor='#FF7F50'/>
      <View style={styles.Header}>
        <Text style={styles.welcomeText}>Hey Bernard,{'\n'}Have you had lunch</Text>
        <View style={styles.gallery}> 
          <TouchableOpacity >
            <View style={styles.button}>
              <Text style={styles.buttontext}>Wed</Text>
              <Text style={styles.buttontext2}>11</Text>   
            </View>
          </TouchableOpacity>
          <TouchableOpacity >
            <View style={styles.button}>
              <Text style={styles.buttontext}>Wed</Text>  
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container:{
    height:'100%',
    justifyContent:'flex-start',
    backgroundColor:'#FFFFFF'
      
  },
  Header:{
    height:'30%',
    backgroundColor:'#FF7F50'
  },
  welcomeText:{
    color:'white',
    fontSize:16,
    textAlign:'center',
    marginTop:30
  },
  button:{
    borderRadius:12,
    paddingHorizontal:14,
    paddingVertical:12,
    backgroundColor:'#FFFFFF',
    width:60,
    marginRight:20

  },
  buttontext:{
    fontSize:15,
  },
  gallery:{
    flexDirection:'row',
    marginHorizontal:40,
    marginTop:20
  },
  buttontext2:{
    fontSize:22,
    fontWeight:'700'
  },

});