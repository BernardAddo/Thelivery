/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Item from './assets/item.png';
import Pickpoint from './assets/location.png';
import Droppoint from './assets/destination.png';
import Picktime from './assets/CLOCK.png';
import DeType from './assets/deliveryType.png';
import status from './assets/status.png';

export default function OrderDetials() {
  return(
    <View >
      <Text style={styles.text}>Item Number :</Text>   
      <Text style={styles.text}>Pickup point :</Text>
      <Text style={styles.text}>Dropoff point :</Text>
      <Text style={styles.text}>Pickup time :</Text>
      <Text style={styles.text}>Delivery type :</Text>
      <Text style={styles.text}>Status :</Text>    
      <Image style={styles.image} source={Item}/>    
      <Image style={styles.image2} source={Pickpoint}/>
      <Image style={styles.image3} source={Droppoint}/>
      <Image style={styles.image4} source={Picktime}/>
      <Image style={styles.image5} source={DeType}/>
      <Image style={styles.image6} source={status}/>
    </View>
    

  );
}

const styles = StyleSheet.create({
  text:{
    marginVertical:19,
    marginLeft:60,
    paddingVertical:1
  },
  image:{
    position:'absolute',
    width:40,
    height:40,
    top:10,
    marginLeft:10
  },
  image2:{
    position:'absolute',
    width:35,
    height:35,
    top:75,
    marginLeft:10
  },
  image3:{
    position:'absolute',
    width:35,
    height:35,
    top:135,
    marginLeft:10
  },
  image4:{
    position:'absolute',
    width:35,
    height:35,
    top:195,
    marginLeft:10
  },
  image5:{
    position:'absolute',
    width:35,
    height:35,
    top:255,
    marginLeft:10
  },
  image6:{
    position:'absolute',
    width:35,
    height:35,
    top:315,
    marginLeft:10
  }
});