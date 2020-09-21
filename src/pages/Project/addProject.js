import React from 'react';
import { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';



const AddProject = ({navigation}) => {
   
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
                  Input Data Pegawai
            </Text>
          <ScrollView>
              <TextInput style={styles.input}
                 placeholder="Nama Project"
              ></TextInput>
              <TextInput style={styles.input}
                 placeholder="Tanggal Mulai"
              ></TextInput>
              <TextInput style={styles.input}
                 placeholder="Tanggal Selesai"
              ></TextInput>
              <TextInput style={styles.inputarea}
                 placeholder="Deskripsi"
                 multiline={true}
                 textAlignVertical="top"
              ></TextInput>
              <TextInput style={styles.input}
                 placeholder="Nama Client"
              ></TextInput>

              <TouchableOpacity style={styles.btn}>
                  <Text style={{fontWeight:'bold'}}>Tambah</Text>
              </TouchableOpacity>
          </ScrollView>
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
export default AddProject;

