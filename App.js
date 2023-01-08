/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Orders from './src/Components/orders';
import Places from './src/Components/savedPlaces';
import Profile from './src/Components/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import OrderDetials from './src/Components/orderDetials';

import { Image } from 'react-native';
import Home from './src/Components/Home';
const Stack = createStackNavigator();

function Route(){
  return(
    
    <Stack.Navigator >
      <Stack.Screen name='Orders' component={Orders} options={{title:'Current Orders', headerTintColor:'#A36BAE'}}/>
      <Stack.Screen name='OrdersDetails' component={OrderDetials} options={{title:'Order Details', headerTintColor:'#A36BAE'}}/>
    </Stack.Navigator>

  );

  

}


const Tab = createBottomTabNavigator();
export default function App() {
  return (
     

    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard:true,headerShown: false, tabBarStyle: { justifyContent:'flex-end' },tabBarActiveTintColor:'#A36BAE' }} >
        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ focused }) => (
          <Image
            focused={focused}
            source={require('./src/Components/assets/deliveryIcon.png')} resizeMode='contain' style={{width:25, height:25, tintColor:focused ? '#A36BAE':'#748c94'}}
          />
        )}}/>
         
        
        <Tab.Screen name="Order" component={Route} options={{ tabBarIcon: ({ focused }) => (
          <Image
            focused={focused}
            source={require('./src/Components/assets/ordersIcon.png')} resizeMode='contain' style={{width:25, height:25, tintColor:focused ? '#A36BAE':'#748c94'}}
          />
          
        )}} />
        <Tab.Screen name="Saved Places" component={Places} options={{ tabBarIcon: ({ focused }) => (
          <Image
            focused={focused}
            source={require('./src/Components/assets/savedPlaces.png')} resizeMode='contain' style={{width:25, height:25, tintColor:focused ? '#A36BAE':'#748c94'}}
          />
        )}} />
       

        <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ focused }) => (
          <Image
            focused={focused}
            source={require('./src/Components/assets/Account.png')} resizeMode='contain' style={{width:25, height:25, tintColor:focused ? '#A36BAE':'#748c94'}}
          />
        )}}/>
      </Tab.Navigator>
    </NavigationContainer>


  );
}