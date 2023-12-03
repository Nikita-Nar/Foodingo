import {React, useRef, useState, useEffect} from "react";
import {View, Text, ImageBackground, Image, ScrollView, TouchableOpacity, Button} from "react-native";
import styles from "./styles";


const levelBackGround = require('./assets/bg1.jpg');


const LevelNode = ({level, onPress}) => (
    <TouchableOpacity onPress={onPress} >
        <View style={styles.levelNodes}>
            <Text style={styles.levelNodeText}>{level}</Text>
        </View>
    </TouchableOpacity>
);

const LevelNode2 = ({level, onPress}) => (
    <TouchableOpacity onPress={onPress} >
        <View style={styles.levelNodes2}>
            <Text style={styles.levelNodeText}>{level}</Text>
        </View>
    </TouchableOpacity>
);

const LevelMap = ({route, navigation}) => {
    const numLevels = 20;
    ref = useRef(null);

    const [level, setLevel] = useState(0);
    
    useEffect(() => {
        setLevel(route.params.level)
    }, [route.params.level])

    function ScrollHandler(){
        ref.current.scrollTo({y:((level - 1) * 230 + 55)})
    }
    
    const HandleLevelClick = (index) => {
       if(index <= level){
            if(index === level){
                navigation.navigate("Recipes", {level: level, param: true})
            }
            else{
                navigation.navigate("Recipes", {param: false})
            }
       }
       else{
        alert('You have not unlocked this level')
       }
    }; 

    const levelNodeArr = [];

    for (let i =1; i < numLevels + 1; i++) {
        if(level >= i){
            levelNodeArr.push(
                <LevelNode
                key={i}
                level={i}
                onPress={() => HandleLevelClick(i)}
                />
            );
        }
        else{
            levelNodeArr.push(
                <LevelNode2
                key={i}
                level={i}
                onPress={() => HandleLevelClick(i)}
                />
            );
        }
    }

    return (
        <ScrollView style={{flex:1}} ref={ref}>
            <ImageBackground source={levelBackGround} style={styles.background}>
                    <View style={{width: "90%", backgroundColor: 'white', marginBottom: 10, marginTop: 10}}>
                        <Button title="Go To Latest Level" onPress={() => ScrollHandler()}/> 
                    </View>
                    <View style={styles.LevelMapContainer} >
                        {levelNodeArr}
                    </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default LevelMap; 
