import React from 'react';
import { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const AddPegawai = ({navigation}) => {
   
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
          <View>
              <TextInput style={styles.input}
                 placeholder="NO. KTP"
              ></TextInput>
              <TextInput style={styles.input}
                 placeholder="Email"
              ></TextInput>
              <TextInput style={styles.input}
                 placeholder="Nama"
              ></TextInput>
              <TextInput style={styles.input}
                 placeholder="NO. HP"
              ></TextInput>
              <TextInput style={styles.input}
                 placeholder="Jabatan"
              ></TextInput>
              <TextInput style={styles.input}
                 placeholder="Password"
              ></TextInput>

              <TouchableOpacity style={styles.btn}>
                  <Text style={{fontWeight:'bold'}}>Tambah</Text>
              </TouchableOpacity>
          </View>
      </View>

      <View style={{backgroundColor: '#82b1ff',height: 54, flexDirection: 'row'}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity 
            style={{width:26,height:26}}
            onPress={()=>navigation.navigate('Dashboard')}>
            <Image  style={{width:26,height:26}} source={require('../../../src/icons/home.png')}/>
          </TouchableOpacity>
          <Text style={{fontSize: 10, color:'#545454',marginTop:4}}>Home</Text>
        </View>

        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity 
            style={{width:26,height:26}}
            onPress={()=>navigation.navigate('Pegawai')}>
            <Image  style={{width:26,height:26}} source={require('../../../src/icons/user-1.png')}/>
          </TouchableOpacity>
          <Text style={{fontSize: 10, color:'#545454',marginTop:4}}>Pegawai</Text>
        </View>

        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity 
            style={{width:26,height:26}}
            onPress={()=>navigation.navigate('Client')}>
            <Image  style={{width:26,height:26}} source={require('../../../src/icons/users.png')}/>
          </TouchableOpacity>
          <Text style={{fontSize: 10, color:'#545454',marginTop:4}}>Client</Text>
        </View>

        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity 
            style={{width:26,height:26}}
            onPress={()=>navigation.navigate('Project')}>
            <Image  style={{width:26,height:26}} source={require('../../../src/icons/file-2.png')}/>
          </TouchableOpacity>
          <Text style={{fontSize: 10, color:'#545454',marginTop:4}}>Project</Text>
        </View>

        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity 
            style={{width:26,height:26}}
            onPress={()=>alert('Hello')}>
            <Image  style={{width:26,height:26}} source={require('../../../src/icons/id-card.png')}/>
          </TouchableOpacity>
          <Text style={{fontSize: 10, color:'#545454',marginTop:4}}>PIC</Text>
        </View>

        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity 
            style={{width:26,height:26}}
            onPress={()=>alert('Hello')}>
            <Image  style={{width:26,height:26}} source={require('../../../src/icons/settings-1.png')}/>
          </TouchableOpacity>
          <Text style={{fontSize: 10, color:'#545454',marginTop:4}}>Account</Text>
        </View>
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
        backgroundColor:'#81c784',
        alignItems:'center',
    }
});
export default AddPegawai;

