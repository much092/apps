import { NavigationContainer } from '@react-navigation/native';
import React,{ useState } from 'react';
import { Text, View, TextInput,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Login = ({navigation}) => {

const [text, setText] = useState('');
let title=useState('');
if( text == "admin" )
{

   title = "Dashboard";

}
else if(text == "user")
{

    title = "DashboardP";

}

else if(text == "pm")
{

    title = "DashboardPM";

}
    return(
        <View>
            <View style={{paddingTop:50}}>
                
            <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center'}}>Login Page</Text>
            </View>
                <View style={{
                    marginVertical: 100,
                    marginHorizontal: 30,
                }}>
                <TextInput style={{
                    paddingLeft : 20,
                    borderRadius : 40,
                    height : 50,
                    fontSize : 25,
                    backgroundColor : 'white',
                    borderWidth : 1,
                    marginBottom : 20,
                    color : '#34495e'
                }}
                    placeholder = "Email"
                    returnKeyType = "next"
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                    
                    >
                </TextInput>
                <TextInput style={{
                    paddingLeft : 20,
                    borderRadius : 40,
                    height : 50,
                    fontSize : 25,
                    backgroundColor : 'white',
                    borderWidth : 1,
                    marginBottom : 20,
                    color : '#34495e'
                }}
                    placeholder = "Password"
                    returnKeyType = "go"
                    >
                </TextInput>
                <TouchableOpacity style={{paddingVertical:13, backgroundColor:'#a55eea',borderRadius:25}}
                onPress={()=>navigation.replace(title)}
                >
                <Text
                    style={{
                        fontSize:12,
                        fontWeight:'bold',
                        color: 'white',
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}
                    >
                    Login
                </Text>
                </TouchableOpacity>
                </View>
        </View>
    );
};

export default Login;