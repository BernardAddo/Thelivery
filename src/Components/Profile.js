/* eslint-disable linebreak-style */
import React from 'react';
import { StyleSheet, View, Image, Dimensions,Text,TouchableOpacity} from 'react-native';
import profile from './assets/picture.jpg';


export default function Profile() {
  
  return(
    <View style={styles.container}>
      <Image style={styles.topBackgroundPic} source={profile}/>
      <View style={styles.form} > 
        <Text style={styles.header}>Username</Text>
        <Text style={styles.vaule}>Bernard</Text>  
        <View style={styles.spacing} >
          <Text style={styles.header}>Email</Text>
          <Text style={styles.vaule}>bernardaddo1@gmail</Text>
        </View>
        <View style={styles.spacing} >
          <Text style={styles.header}>location</Text>
          <Text style={styles.vaule}>Accra,Ghana</Text>
        </View>
        <View style={styles.spacing} >
          <Text style={styles.header}>Contact</Text>
          <Text style={styles.vaule}>+2335057088552</Text>
        </View>
        <View style={styles.spacing} >
          <TouchableOpacity>
            <Text style={styles.button}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    height:'100%',
    justifyContent:'flex-start',
  },
  topBackgroundPic:{
    width:Dimensions.get('window').width, 
    height:200,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    opacity:0.8,
    backgroundColor:'#9C1BB6'
    
  },
  profileImage:{
    position:'absolute',
    width:90,
    height:90,
    top:80,
    marginHorizontal:160,
    borderRadius:40
  },
  form:{
    height:'100%',
    margin:20
    
  },
  header:{
    fontSize:17,
    fontWeight:'600'

  },
  vaule:{
    fontSize:17,
    fontWeight:'100',
    color:'#9C1BB6'
  },
  spacing:{
    marginTop:25
  },
  button:{
    textAlign:'right',
    fontSize:17,
    marginTop:30,
    fontWeight:'700',
    color:'#A36BAE',
    paddingHorizontal:5,
    paddingBottom:3
  }
}
);