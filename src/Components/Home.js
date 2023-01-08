/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable linebreak-style */
import React from 'react';
import { StyleSheet,Image, View, Dimensions,Text, StatusBar,TextInput, ScrollView} from 'react-native';
import topBackground from './assets/food.jpg';
import profile from './assets/pic.png';
import Flatbutton from './button';

export default function Home({navigation}) {
  return(
    <View style={styles.Container}>
      
      <StatusBar translucent backgroundColor='#A36BAE'/>
      <Image style={styles.topBackgroundPic} source={topBackground}/>
      <View style={styles.viewText}>
        <Text style={styles.text}>THELIVERY,{'\n'}FAST AND RELIABLE</Text>
      </View>
      <View style={styles.viewProfile}>
        <Text style={styles.profile}>Hey Bernard, ready to order?</Text>
      </View>
      <Image style={styles.profileImage} source={profile}/>
      <ScrollView>
        <TextInput placeholder='Pickup location'style={styles.input}/>
        <TextInput placeholder='Cartegory'style={styles.input}/>
        <TextInput placeholder='Dropoff location'style={styles.input}/>
        <TextInput placeholder='Pickup time'style={styles.input}/>
        <TextInput placeholder='Contact'style={styles.input} autoCapitalize="none"/>
        <Flatbutton text='Oder now'  onPress={()=>navigation.navigate('OrdersDetails')} />
      </ScrollView>
    </View> 

  );
}

const styles = StyleSheet.create({
  Container:{
    height:'100%',
    justifyContent:'flex-start',
    
  },

  topBackgroundPic:{
    width:Dimensions.get('window').width, 
    height:200,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    opacity:0.5,
    backgroundColor:'#9C1BB6'
  },
  viewText:{
    position:'absolute',
    top:42,
    marginHorizontal:70

  },
  
  text:{ 
    color:'white',
    fontSize:25,
    textAlign:'center',
    fontWeight:'700'  

  },
  viewProfile:{
    position:'absolute',
    top:143,
    marginHorizontal:38
  },

  profile:{ 
    color:'black',
    backgroundColor:'white',
    borderRadius:10,
    paddingRight:30,
    paddingLeft:70,
    paddingVertical:10,
    fontSize:16,
    textAlign:'right',
    fontWeight:'200' 
  },
  profileImage:{
    position:'absolute',
    width:33,
    height:33,
    top:150,
    marginHorizontal:53
  },
  
  input:{
    marginTop:30,
    paddingVertical:5,
    paddingLeft:20,
    borderWidth:2,
    paddingRight:200,
    borderColor:'#9C1BB6',
    borderRadius:8,
    marginHorizontal:40,
    backgroundColor:'white'

  }
  
});
