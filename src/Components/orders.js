/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */

import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

export default function Orders({navigation}) {

  

  const [currentOrder]= useState([
    {itemNumber:234445646, pickupPoint:'Any belly, Labone',dropoffPoint:'Stanbic Bank, Osu', 
      pickupTime:'2:00pm 24/08/2021', deliveryType:'Food delivery',status:'In progress'},
    {itemNumber:768445646, pickupPoint:'Hisense, Legon',dropoffPoint:'Pentagon, Legon', 
      pickupTime:'4:00pm 24/08/2021', deliveryType:'Electronics delivery',status:'Waiting for Rider'}
  ]);
  
  return(
    <View >
      <FlatList data={currentOrder} renderItem={({item})=>{
        return (
          <TouchableOpacity onPress={() => navigation.navigate('OrdersDetails')}>
            <View style={styles.card}>
              <Text style={styles.Status}>{item.status}</Text>
              <Text style={styles.test}>{item.pickupPoint}  -------->  {item.dropoffPoint}</Text>
            </View>
          </TouchableOpacity>
           

        );
      }}   
      />
      <Text style={styles.header}>Completed Orders</Text>
      <FlatList data={currentOrder} renderItem={({item})=>{
        return (
          <TouchableOpacity onPress={() => navigation.navigate('OrdersDetails')}>
            <View style={styles.card}>
              <Text style={styles.Status}>{item.status}</Text>
              <Text style={styles.test}>{item.pickupPoint}  -------->  {item.dropoffPoint}</Text>
              <Text>{item.pickupTime}</Text>
            </View>
          </TouchableOpacity> );
      }}   
      />
    </View>
  );
}

const styles= StyleSheet.create({
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
  header:{
    color:'#A36BAE',
    backgroundColor:'white',
    fontSize:19,
    marginTop:30,
    padding:15,
    fontWeight:'700',
    elevation:3

  }
});