import React, {useState} from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";

const BackgroundImg = require('./assets/images/LevelMapBG.jpg');
const levels = [
    'Newbie',
    'Novice',
    'Mid-Tier',
    'Advanced',
    'Expert',
];

const LevelButton = ({title, onPress}) => {
    return(
        <TouchableOpacity style={styles.homeButton} onPress={onPress}>
             <Text style ={styles.difficultyButtonText}> {title} </Text>
        </TouchableOpacity>
    );
};

function DifficultySelection({navigation}){
    return (
        <ImageBackground source={BackgroundImg} 
        style={styles.difficultyContainer}>
            <Text style={styles.difficultyHeaderText}> Choose </Text>
            <Text style={styles.difficultyHeaderText}> Your Level </Text>
            
            <Ionicons
                name= 'information-circle-outline'
                size= {32}
                color= 'white'
                onPress= {() => Alert.alert('Get Started', 'Choose A Recipes Difficulty Level')}
            />

            {levels.map((level, index) => ( 
                <LevelButton 
                    key={index}
                    title={level}
                    onPress={() => {switch(index){
                        case 0:
                            navigation.navigate('NewbieLevel')
                            break;
                        case 1:
                            navigation.navigate('NoviceLevel')
                            break;
                        case 2:
                            navigation.navigate('MidTierLevel')
                            break;
                        case 3:
                            navigation.navigate('AdvancedLevel')
                            break;
                        case 4:
                            navigation.navigate('ExpertLevel')
                            break;
                    }}}
                />
             ))}
            
        </ImageBackground>
    );
};

export default DifficultySelection;