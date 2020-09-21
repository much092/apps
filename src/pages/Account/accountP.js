import React,{ useState } from 'react';
import { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator} from '@react-navigation/stack';
import TabP from '../Tab/TabP';

const Stack = createStackNavigator();


const AccountP = ({navigation}) => {
   
const [text, setText] = useState('Nama');
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
                  Edit Data
            </Text>
          <ScrollView>
              <View style={{
                  justifyContent:'center',
                  alignItems:'center',
              }}>
               <Image style={{height:100,width:100}} source={require('../../../src/icons/user-1.png')}/>
              </View>
             
              <TextInput style={styles.input}
                 placeholder="Nama"
                 returnKeyType = "next"
                 onChangeText={text => setText(text)}
                 defaultValue={text}
              ></TextInput>
              <TextInput style={styles.input}
                 placeholder="No. KTP"
              ></TextInput>
              <TextInput style={styles.input}
                 placeholder="No.Telp"
              ></TextInput>
              <TextInput style={styles.input}
                 placeholder="Email"
              ></TextInput>
              <TextInput style={styles.input}
                 placeholder="Password"
              ></TextInput>

              <TouchableOpacity style={styles.btn}>
                  <Text style={{fontWeight:'bold'}}>Simpan</Text>
              </TouchableOpacity>
          </ScrollView>
      </View>
    
      <View style={{backgroundColor: '#82b1ff',height: 54, flexDirection: 'row'}}>
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

  
  
const styles=StyleSheet.create({
    input: { 
        marginVertical:10,
        borderWidth:2,
        borderRadius:10,
        paddingHorizontal:10,
        marginHorizontal:10,

        },
    inputarea: { 
        marginVertical:10,
        borderWidth:2,
        borderRadius:10,
        paddingHorizontal:10,
        marginHorizontal:10,
        justifyContent: 'flex-start',
        height: 90,
        },
    btn:{
        marginVertical:10,
        borderRadius:20,
        paddingVertical:10,
        marginHorizontal:100,
        backgroundColor:'#81c784',
        alignItems:'center',
    }
});
export default AccountP;

