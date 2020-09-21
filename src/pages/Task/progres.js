import React from 'react';
import { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator} from '@react-navigation/stack';
import Tab from '../Tab/tabPM';

const Stack = createStackNavigator();
const ProgressPM= () => {
   
  return(
      <View style={{ flex: 1 }}>

      <ScrollView style={{flex:1, backgroundColor: 'white'}}>
        <View 
          style={{
            flex:1,
            backgroundColor:'#4db6ac', 
            justifyContent: 'space-between',
           // height:200,
            marginHorizontal:20,
            marginVertical:0,
            borderRadius:12,
            marginTop:20,
            }}>
          <Text style={{paddingLeft:10,paddingTop:10,textAlign:'center', fontSize:20,fontWeight:'bold'}}>To Do</Text>
          <View
            style={{
                flexDirection:'row' ,
                justifyContent:'space-between',
                backgroundColor: 'white',
                paddingHorizontal:30,
                marginHorizontal:20,
                paddingVertical:10,
                marginVertical:10,
            }}
            >
            <Text style={{fontSize:20,fontWeight:'bold'}}>To Do 1</Text>
            
         
          </View>
          <View
            style={{
                flexDirection:'row' ,
                justifyContent:'space-between',
                backgroundColor: 'white',
                paddingHorizontal:30,
                marginHorizontal:20,
                paddingVertical:10,
                marginVertical:10,
            }}
            >
            <Text style={{fontSize:20,fontWeight:'bold'}}>To Do 2</Text>
            
         
          </View>
          <View
            style={{
                flexDirection:'row' ,
                justifyContent:'space-between',
                backgroundColor: 'white',
                paddingHorizontal:30,
                marginHorizontal:20,
                paddingVertical:10,
                marginVertical:10,
            }}
            >
            <Text style={{fontSize:20,fontWeight:'bold'}}>To Do 3</Text>
            
         
          </View>
        </View>
        <View 
          style={{
            flex:1,
            backgroundColor:'#4db6ac', 
            justifyContent: 'space-between',
           // height:200,
            marginHorizontal:20,
            marginVertical:0,
            borderRadius:12,
            marginTop:20,
            }}>
          <Text style={{paddingLeft:10,paddingTop:10,textAlign:'center', fontSize:20,fontWeight:'bold'}}>Doing</Text>
          <View
            style={{
                flexDirection:'row' ,
                justifyContent:'space-between',
                backgroundColor: 'white',
                paddingHorizontal:30,
                marginHorizontal:20,
                paddingVertical:10,
                marginVertical:10,
            }}
            >
            <Text style={{fontSize:20,fontWeight:'bold'}}>Doing 1</Text>
            
         
          </View>
          <View
            style={{
                flexDirection:'row' ,
                justifyContent:'space-between',
                backgroundColor: 'white',
                paddingHorizontal:30,
                marginHorizontal:20,
                paddingVertical:10,
                marginVertical:10,
            }}
            >
            <Text style={{fontSize:20,fontWeight:'bold'}}>Doing 2</Text>
            
         
          </View>

          <View
            style={{
                flexDirection:'row' ,
                justifyContent:'space-between',
                backgroundColor: 'white',
                paddingHorizontal:30,
                marginHorizontal:20,
                paddingVertical:10,
                marginVertical:10,
            }}
            >
            <Text style={{fontSize:20,fontWeight:'bold'}}>Doing 3</Text>
            
         
          </View>
        </View>

        <View 
          style={{
            flex:1,
            backgroundColor:'#4db6ac', 
            justifyContent: 'space-between',
           // height:200,
            marginHorizontal:20,
            marginVertical:0,
            borderRadius:12,
            marginTop:20,
            marginBottom:20,
            }}>
          <Text style={{paddingLeft:10,paddingTop:10,textAlign:'center', fontSize:20,fontWeight:'bold'}}>Done</Text>
          <View
            style={{
                flexDirection:'row' ,
                justifyContent:'space-between',
                backgroundColor: 'white',
                paddingHorizontal:30,
                marginHorizontal:20,
                paddingVertical:10,
                marginVertical:10,
            }}
            >
            <Text style={{fontSize:20,fontWeight:'bold'}}>Done 1</Text>
         
          </View>
          <View
            style={{
                flexDirection:'row' ,
                justifyContent:'space-between',
                backgroundColor: 'white',
                paddingHorizontal:30,
                marginHorizontal:20,
                paddingVertical:10,
                marginVertical:10,
            }}
            >
            <Text style={{fontSize:20,fontWeight:'bold'}}>Done 2</Text>
         
          </View>
          <View
            style={{
                flexDirection:'row' ,
                justifyContent:'space-between',
                backgroundColor: 'white',
                paddingHorizontal:30,
                marginHorizontal:20,
                paddingVertical:10,
                marginVertical:10,
            }}
            >
            <Text style={{fontSize:20,fontWeight:'bold'}}>Done 3</Text>
         
          </View>
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

export default ProgressPM;
