import React, {Component} from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator} from '@react-navigation/stack';
import Tab from '../Tab';

const Stack = createStackNavigator();
const DetailProjectAdmin = ({navigation}) => {
   
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
        <View 
            style={{
                marginVertical: 20,
                flexDirection:'row',
                marginHorizontal:5,
                justifyContent: 'space-between'
            }}
        >
                <TouchableOpacity style={{width:200, paddingVertical:13, backgroundColor:'#a55eea',borderRadius:25}}
                onPress={()=>navigation.replace('AddMaterial')}
                >
                <Text
                    style={{
                        fontSize:12,
                        fontWeight:'bold',
                        color: 'white',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                    }}
                    >
                    Tambah Material
                </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{width:200,paddingVertical:13, backgroundColor:'#a55eea',borderRadius:25}}
                onPress={()=>navigation.replace('AddAlat')}
                >
                <Text
                    style={{
                        fontSize:12,
                        fontWeight:'bold',
                        color: 'white',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                    }}
                    >
                    Tambah Alat
                </Text>
                </TouchableOpacity>
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

export default DetailProjectAdmin;
