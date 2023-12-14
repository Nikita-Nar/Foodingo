import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const loginlogoImage = require('./assets/images/DingoLogo.jpg');
const registerBackground = require('./assets/images/signupBackground.png');

const RegisterPage = ({navigation}) => {
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    const onPressRegister = () => {
        //handle log in pressed
        console.log("Register Pressed");
        navigation.navigate('Login')
    }
    return (
        <ImageBackground
        source = {registerBackground}
        style={styles.backgroundImage}
        >

        <Image source={loginlogoImage} style={styles.logInLogo}/>

        <View style={styles.registerContainer}> 
        <Text style={styles.registerHeader}> Create </Text>
        <Text style={styles.registerHeader}> New Account </Text>


        <View style={styles.inputView}>
            <TextInput style={styles.inputText}
            placeholder='Email'
            placeholderTextColor={"#003f5c"}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput style={styles.inputText}
            placeholder='Password'
            placeholderTextColor={"#003f5c"}
            />
        </View>

        <TouchableOpacity
        onPress={onPressRegister}
        style={styles.registerButton}>
            <Text style={styles.registerText}>
                Create Account
            </Text>

        </TouchableOpacity>
    </View>
    </ImageBackground>

    )
}

const styles = StyleSheet.create({

    registerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logInLogo: {
        width: 100,
        height: 100, 
        marginLeft: 160,
        borderRadius: 150,
        marginTop: 20,
    },
    registerHeader: {
            // fontWeight: "bold",
        fontSize: 55,
        fontFamily: 'Avenir', 
        color: 'white',
        marginBottom: 15,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#FFAF88",
        borderRadius: 25, 
        height: 50,
        marginBottom: 30,
        justifyContent: 'center',
        padding: 20,
        borderWidth: 2,
        borderColor: 'white',
    },
    inputText: {
        height: 50,
        color: "white",
    },
  
    registerButton: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'white',
    },
    loginText: {
        height: 20,
        color: 'white',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    
    });
    
    export default RegisterPage;
