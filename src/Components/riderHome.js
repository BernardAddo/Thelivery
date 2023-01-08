/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { StyleSheet,Image, View, Dimensions,Text, StatusBar,FlatList,TouchableOpacity} from 'react-native';
import topBackground from './assets/food.jpg';
import profile from './assets/pic.png';


export default function riderHome({navigation}) {
  const [currentOrder]= useState([
    {itemNumber:234445646, pickupPoint:'Any belly, Labone',dropoffPoint:'Stanbic Bank, Osu', 
      pickupTime:'2:00pm 24/08/2021', deliveryType:'Food delivery',status:'In progress'},
    {itemNumber:768445646, pickupPoint:'Hisense, Legon',dropoffPoint:'Pentagon, Legon', 
      pickupTime:'4:00pm 24/08/2021', deliveryType:'Electronics delivery',status:'Waiting for Rider'},
    {itemNumber:457744564, pickupPoint:'Icy cup, KNUST',dropoffPoint:'Unity hall, KNUST', 
      pickupTime:'3:00pm 24/08/2021', deliveryType:'Food delivery',status:'In progress'}
  ]);
      
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
      <Text style={styles.header}>Open Orders</Text>
      <FlatList data={currentOrder} renderItem={({item})=>{
        return (
          <TouchableOpacity onPress={() => navigation.navigate('OrdersDetails')}>
            <View style={styles.card}>
              <Text style={styles.Status}>{item.status}</Text>
              <Text style={styles.test}>{item.pickupPoint}  -------->  {item.dropoffPoint}</Text>
              <Text>{item.pickupTime}</Text>
            </View>
          </TouchableOpacity>
           

        );
      }}   
      />
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
  header:{
    fontSize:19,
    color:'white',
    textAlign:'center',
    marginTop:20,
    marginBottom:20,
    backgroundColor:'#A36BAE',
    paddingVertical:5,
    paddingHorizontal:7,
    borderRadius:10,
    marginHorizontal:45
  },
  test:{
    margin:2

  },
  Status:{
    color:'#A36BAE',
    margin:2
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
    
  }, 
   
});
  