import React from 'react';
import { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator} from '@react-navigation/stack';
import Tab from '../Tab';

const Stack = createStackNavigator();
const Dashboard = () => {
   
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
          <Text style={{fontSize:20,fontWeight:'bold'}}>Pegawai</Text>
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
          <Text style={{fontSize:20,fontWeight:'bold'}}>Client</Text>
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
          <Text style={{fontSize:20,fontWeight:'bold'}}>Project</Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>5</Text>
        </View>

        <View 
          style={{
            flexDirection:'row' ,
            backgroundColor:'grey', 
            justifyContent:'space-between',
            height:50,
            marginHorizontal:20,
            borderRadius:4,
            marginTop:20,
            marginBottom:20,
            alignItems:'center',
            paddingHorizontal:6
            }}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>FeedBack</Text>
        </View>

        <View 
          style={{
            backgroundColor:'#4db6ac', 
            marginHorizontal:20,
            borderRadius:4,
            paddingHorizontal:20,
            paddingVertical:52,
            marginBottom:20
            }}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Project 1</Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Isi Feedback</Text>
        </View>
        
        <View 
          style={{
            backgroundColor:'#4db6ac', 
            marginHorizontal:20,
            borderRadius:4,
            paddingHorizontal:20,
            paddingVertical:52,
            marginBottom:20
            }}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Project 2</Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Isi Feedback</Text>
        </View>
      </ScrollView>

      <View style={{ backgroundColor: '#82b1ff',height: 54, flexDirection: 'row'}}>
          <Stack.Navigator>
          <Stack.Screen 
              name="Tab" 
              component={Tab} 
              options={{
              headerShown:false,
              }}
          />
          </Stack.Navigator>
      </View>
      
</View>
    );
  };

export default Dashboard;

const style=StyleSheet.create({

});