import React from 'react';
import { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator} from '@react-navigation/stack';
import TabPM from '../Tab/tabPM';

const Stack = createStackNavigator();
const DashboardPM = () => {
   
  return(
      <View style={{ flex: 1 }}>

      <ScrollView style={{flex:1, backgroundColor: 'white'}}>
        <View 
          style={{
            flexDirection:'row' ,
            backgroundColor:'#4db6ac', 
            justifyContent:'space-between',
            height:50,
            marginHorizontal:20,
            paddingVertical:52,
            borderRadius:12,
            marginTop:20,
            alignItems:'center',
            paddingHorizontal:50
            }}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Jumlah Tim</Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>5</Text>
        </View>

        <View 
          style={{
            flexDirection:'row' ,
            backgroundColor:'#4db6ac', 
            justifyContent:'space-between',
            height:50,
            marginHorizontal:20,
            paddingVertical:52,
            borderRadius:12,
            marginTop:20,
            alignItems:'center',
            paddingHorizontal:50
            }}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Progress Tugas</Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>50%</Text>
        </View>

        <View 
          style={{
            backgroundColor:'#4db6ac', 
            justifyContent:'space-between',
            marginHorizontal:20,
            paddingVertical:52,
            borderRadius:12,
            marginTop:20,
            paddingHorizontal:50
            }}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Nama Project</Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Nama Project</Text>
        </View>
        <View 
          style={{
            backgroundColor:'#4db6ac', 
            marginHorizontal:20,
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
              name="TabPM" 
              component={TabPM} 
              options={{
              headerShown:false,
              }}
          />
          </Stack.Navigator>
      </View>
      
</View>
    );
  };

export default DashboardPM;
