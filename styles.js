import React from "react";
import {View, StyleSheet, Image, ImageBackground, Dimensions } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1, //if 1, take up all available space on screen
        backgroundColor: 'transparent',
        alignItems: 'center', //content is centered horizontally
        justifyContent: 'flex-start',
        paddingTop: 0,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        resizeMode: 'cover', //mantain aspect ratio of image
        justifyContent: 'center',
        alignItems: 'center', 
    },
    backgroundTest: {
        flex: 1,
        backgroundColor: 'blue',
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        // fontWeight: 'bold',
        textAlign: 'center',
    },
    headerTextLevel: {
        color: 'black',
        fontSize: 32,
        textAlign: 'left',
    },
    logo: {
        width: 300,
        height: 300, 
        marginTop: 50,
        borderRadius: 150,
    },
    levelIntroImage: {
        width: 430,
        height: 200,
        marginTop: 50
    },
    assesmentButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'black',
        textDecorationLine: 'none', //underline for button text
        marginLeft: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        marginLeft: -5,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    levelNodes : {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'salmon',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderColor: 'black',
        borderWidth: 2,
        
    },
    levelNodeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    LevelMapContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    aCircle: {
        backgroundColor: 'blue',
        width: 300,
        height: 300, 
        marginTop: 50,
        borderRadius: 150,
    },
    pointsContainer: {
        position: 'absolute',
        top: 100,
        right: 10,
    },
    pointsText: {
        fontSize: 24,
    },
});

export default styles; 