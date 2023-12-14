import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Colors from './Shared/Colors';

const loginlogoImage = require('./assets/images/DingoLogo.jpg');


const LoginPage = ({navigation}) => {
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    const onPressLogin = () => {
        //handle log in pressed
        console.log("Login Pressed");
        navigation.navigate('Home')
    }
    const onPressForgotPassword = () => {
        //handle forgot password pressed
        console.log("Forgot Password Pressed");
        navigation.navigate('ResetPassword') //Create 'Reset Password Page'
    }

    const onPressSignUp = () => {
        //handle sign up 
        console.log("Register Pressed");
        navigation.navigate('Register') //Create 'Sign Up Page'
    }

    return (
    <ImageBackground
    source = {require('./assets/images/loginBackground.png')}
    style={styles.backgroundImage}
    >
    <Image source={loginlogoImage} style={styles.logInLogo}/>
    
    <View style={styles.logIncontainer}> 
        <Text style={styles.loginHeader}> Welcome </Text>

        <TouchableOpacity
            onPress = {onPressSignUp}>
            <Text style={styles.forgotSignUpText}>
                New User? Sign up!
            </Text>
        </TouchableOpacity>

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
        onPress={onPressLogin}
        style={styles.loginButton}>
            <Text style={styles.loginText}>
                Login
            </Text>

        </TouchableOpacity>

        <TouchableOpacity
            onPress = {onPressForgotPassword}>
            <Text style={styles.forgotPasswordText}>
                Forgot Password?
            </Text>
        </TouchableOpacity>
        <View style={styles.googleButton}>
        <Ionicons name="logo-google" size={24} color="white" />
        <Text style={{color:Colors.secondary, marginTop: 3, marginLeft: 2}}> Sign In with Google </Text>
       
        </View>
    </View>
    </ImageBackground>
    )

}

const styles = StyleSheet.create({

    logIncontainer: {
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
    loginHeader: {
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
    forgotSignUpText: {
        color: "white",
        fontSize: 15,
        marginBottom: 60,
    },
    forgotPasswordText: {
        color: "white",
        fontSize: 15,
        marginTop: 10,
    },
    loginButton: {
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
    googleButton: {
        backgroundColor:Colors.primary,
        padding: 10,
        margin: 30,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

});

export default LoginPage; 
