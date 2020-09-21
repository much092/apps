import React from 'react';
import { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator} from '@react-navigation/stack';
import TabP from '../Tab/TabP';

const Stack = createStackNavigator();
const DetailProject = () => {
   
  return(
      <View style={{ flex: 1 }}>

      <ScrollView style={{flex:1, backgroundColor: 'white'}}>
        
        <View 
          style={{
            backgroundColor:'#4db6ac', 
            marginHorizontal:10,
            height: 300,
            borderRadius:12,
            paddingLeft: 10,
            marginTop:20,
            }}>
          <Text style={{fontSize:20,fontWeight:'bold',paddingTop:20}}>Informasi Project</Text>
          <Text style={{fontSize:20,fontWeight:'bold',paddingTop:20}}>Nama Project : </Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Tanggal Mulai : </Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Tanggal Selesai :</Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Progress : </Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Nama Client : </Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Project Manager : </Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Deskripsi : </Text>
        </View>

      </ScrollView>

      <View style={{ backgroundColor: '#82b1ff',height: 54, flexDirection: 'row'}}>
          <Stack.Navigator>
          <Stack.Screen 
              name="TabP" 
              component={TabP} 
              options={{
              headerShown:false,
              }}
          />
          </Stack.Navigator>
      </View>
      
</View>
    );
  };

export default DetailProject;
