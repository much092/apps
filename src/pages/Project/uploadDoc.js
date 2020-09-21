import React from 'react';
import { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator} from '@react-navigation/stack';
import Tab from '../Tab/tabPM';

const Stack = createStackNavigator();


const UploadDoc = ({navigation}) => {
   
  return(
      <View style={{ flex: 1 }}>

      <View style={{flex:1}}>
          <Text style={{
              marginVertical:30, 
              marginHorizontal:50, 
              justifyContent:'center', 
              textAlign:'center',
              fontSize:20, fontWeight:'bold'}}
              >
                  Upload Dokumen
            </Text>
          <View>
                <View style={{
                    backgroundColor:'#b0bec5',
                    marginHorizontal: 20
                }}>
                <TextInput style={styles.input}
                    placeholder=""
                ></TextInput>
                
                <TouchableOpacity style={styles.btnchoose}>
                    <Text style={{fontWeight:'bold'}}>Choose File</Text>
                </TouchableOpacity>

                </View>
                
                <TouchableOpacity style={styles.btn}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Upload</Text>
                </TouchableOpacity>
            </View>
      </View>
      <View style={{backgroundColor: '#82b1ff',height: 54, flexDirection: 'row'}}>
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

  
  
const styles=StyleSheet.create({
    input: { 
        marginVertical:10,
        borderWidth:2,
        borderRadius:10,
        paddingHorizontal:10,
        marginHorizontal:10,

        },
    btn:{
        marginVertical:10,
        borderRadius:20,
        paddingVertical:10,
        marginHorizontal:100,
        backgroundColor:'#1b5e20',
        alignItems:'center',
    },
    
    btnchoose:{
        marginVertical:10,
        borderRadius:20,
        paddingVertical:10,
        marginHorizontal:100,
        backgroundColor:'#a1887f',
        alignItems:'center',
    }
});

export default UploadDoc;

