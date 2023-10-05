import React, {useState} from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const BackgroundImg = require('./LevelMapBG.jpg');
const levels = [
    'Newbie',
    'Novice',
    'Mid-Tier',
    'Advanced',
    'Expert',
];

const LevelButton = ({title, onPress}) => {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
             <Text style ={styles.buttonText}> {title} </Text>
        </TouchableOpacity>
    );
};

const LevelMap = () => {
    return (
        <ImageBackground source={BackgroundImg} 
        style={styles.container}>
            <Text style={styles.headerText}> Choose </Text>
            <Text style={styles.headerText}> Your Level </Text>
            
            <Ionicons
                name= 'information-circle-outline'
                size= {32}
                color= 'white'
                onPress= {() => alert("Not Available Yet")}
            />

            {levels.map((level, index) => ( 
                <LevelButton 
                    key={index}
                    title={level}
                    onPress={() => alert("Not Available Yet")}
                />
             ))}
            
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: '7%'
    },
    headerText: {
      textTransform: 'uppercase',
      color: 'white',
      fontFamily: 'Avenir-Roman',
      fontSize: 45,
      textAlign: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 40,
        height: 60,
        marginBottom: 10,
        borderRadius: 40,
        backgroundColor: 'rgba(255 255 255/ 0.5)',
    },
    buttonText: {
        textTransform: 'uppercase',
        color: '#995c1f',
        fontFamily: 'Arial Rounded MT Bold',
        fontSize: 40,
        textDecorationLine: 'none', 
        marginLeft: 10,
    },
  });

export default LevelMap;