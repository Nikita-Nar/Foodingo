import React from "react";
import {View, Text, ImageBackground, Image, ScrollView, TouchableOpacity, Button} from "react-native";
import BackgroundGenerator from "./BackGroundGenerator";
import styles from "./styles";


const LevelNode = ({level, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.levelNodes}>
            <Text>{level}</Text>
        </View>
    </TouchableOpacity>
);

const LevelMap = () => {
    const numLevels = 10; 

    const HandleLevelClick = (level) => {
        console.log(`Clicked on Level ${level}`);
    }; 

    const levelNodeArr = [];

    for (let i =1; i < numLevels + 1; i++) {
        const margin = 10; 
        levelNodeArr.push(
            <LevelNode
            key={i}
            level={i}
            onPress={() => HandleLevelClick(i)}
            style={{ marginBottom: margin }}
            />
        );
    }

    return (

        <ScrollView style={{flex:1}}>
            <View style={styles.LevelMapContainer}>
                {levelNodeArr}
            </View>
        </ScrollView>
    );

};

export default LevelMap; 

//<Text>{level}</Text>