import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';


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
    }
    const onPressSignUp = () => {
        //handle sign up 
        console.log("Sign Up Pressed");
    }

    return (
    <ImageBackground
    source = {require('./assets/bg1.jpg')}
    style={styles.backgroundImage}
    >
    <View style={styles.logIncontainer}> 
        <Text style={styles.loginHeader}> Welcome! </Text>
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
            onPress = {onPressForgotPassword}>
            <Text style={styles.forgotSignUpText}>
                Forgot Password?
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={onPressLogin}
        style={styles.loginButton}>
            <Text style={styles.loginText}>
                Login
            </Text>

        </TouchableOpacity>

        <TouchableOpacity
        onPress = {onPressSignUp}>
            <Text style={styles.forgotSignUpText}>
                Signup
            </Text>
        </TouchableOpacity>

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
    loginHeader: {
        fontWeight: "bold",
        fontSize: 55, 
        color: 'white',
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#eab676",
        borderRadius: 25, 
        height: 50,
        marginBottom: 20,
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
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

});

export default LoginPage; 
