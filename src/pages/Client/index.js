import React, {Component} from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const DATA = [
    {
      id: '1',
      name: 'Nama Client 1',
      title: 'Alamat Client 1',
    },
    {
      id: '2',
      name: 'Nama Client 2',
      title: 'Alamat Client 2',
    },
    {
      id: '3',
      name: 'Nama Client 3',
      title: 'Alamat Client 3',
    },
    {
      id: '4',
      name: 'Nama Client 4',
      title: 'Alamat Client 4',
    },
    {
      id: '5',
      name: 'Nama Client 5',
      title: 'Alamat Client 5',
    },
    {
      id: '6',
      name: 'Nama Client 6',
      title: 'Alamat Client 6',
    },
  ];

const Item = ({ title,name }) => (
    <View 
    style={{
        flexDirection:'row' ,
            backgroundColor:'#b39ddb', 
            height:100,
            marginHorizontal:10,
            borderRadius:6,
            marginTop:5,
            marginBottom:5,
            alignItems:'center',
            paddingHorizontal:12

    }}>
      <Image style={{height:50,width:50}} source={require('../../../src/icons/user-1.png')}/>
      <View>
      <Text style={{fontSize:18, fontWeight:'bold', paddingLeft:10}}>{name}</Text>
      <Text style={{paddingLeft:10}}>{title}</Text>
      </View>
      
    </View>
  );

const Client = ({navigation}) => {
    
    const renderItem = ({ item }) => (
       
        <Item 
        name={item.name} 
        title={item.title}
        />
      );
  return(
      <View style={{ flex: 1 }}>
      <View>
          <TextInput 
            placeholder="Search..."
                style={{
                    borderWidth:1,
                    borderColor: 'black',
                    borderRadius: 28,
                    marginHorizontal: 10,
                    marginVertical:10,
                    paddingHorizontal:23
                }}
          >
          </TextInput>
      </View>

      <View style={{ flex: 1 }}>
           <FlatList
             data={DATA}
             renderItem={renderItem}
             keyExtractor={item => item.id}
           />
          <View
            style={{ 
                height:100, 
                width:100,
                position: 'absolute',
                top: 450, left:350,
                }}
          >
              <TouchableOpacity onPress={() => navigation.navigate('AddClient')} style={styles.fab}>
              <Text style={styles.fabIcon}>+</Text>
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
            onPress={()=>alert('Hello')}>
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
            onPress={()=>navigation.navigate('Pic')}>
            <Image  style={{width:26,height:26}} source={require('../../../src/icons/id-card.png')}/>
          </TouchableOpacity>
          <Text style={{fontSize: 10, color:'#545454',marginTop:4}}>PIC</Text>
        </View>

        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity 
            style={{width:26,height:26}}
            onPress={()=>navigation.navigate('Account')}>
            <Image  style={{width:26,height:26}} source={require('../../../src/icons/settings-1.png')}/>
          </TouchableOpacity>
          <Text style={{fontSize: 10, color:'#545454',marginTop:4}}>Account</Text>
        </View>
      </View>
      </View>
    );
  };

  
const styles=StyleSheet.create({
    fab: { 
     //   position: 'absolute', 
        width: 56, 
        height: 56, 
        alignItems: 'center', 
        justifyContent: 'center', 
        right: 20, 
        bottom: 20, 
        backgroundColor: '#03A9F4', 
        borderRadius: 30, 
        elevation: 8 
        }, 
        fabIcon: { 
          fontSize: 40, 
          color: 'white' 
        }
});
export default Client;
