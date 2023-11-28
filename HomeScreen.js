import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from "./styles";
//import LinearGradient from 'react-native-linear-gradient';

//import db from './firebase';
//import { addDoc, collection } from "firebase/firestore";

const logoImage = require('./assets/images/DingoLogo.jpg');
const BackgroundImg = require('./assets/images/StartingBG.jpg');

const AssessmentButton = ({title, onPress}) => {
  return(
      <TouchableOpacity style={styles.homeButton} onPress={onPress}>
           <Text style ={styles.homeButtonText}> {title} </Text>
      </TouchableOpacity>
  );
};

function HomeScreen({ navigation }) {

  /*
  //This is taken from Firebase Cloud Firestore example code
  const testing = async() => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  */
  return (
    <ImageBackground source={BackgroundImg} style={styles.homeContainer}>
      <Image source={logoImage} style={styles.homeLogo}/>

      <Text style={styles.homeHeaderText}>Welcome</Text>
      <Text style={styles.chefText}>CHEF</Text>
      
      <Text style={styles.homeSubText}>Let's assess your culinary skills!</Text>

      <AssessmentButton 
        title = "Start Assessment"
        onPress={() => navigation.navigate('StartAssesment')}
      />  

      {/*<AssessmentButton  
        title = "Skip"
        onPress={() => navigation.navigate('DifficultySelection')}
      />  
  <Text style={styles.subText}>Choose your own level?</Text>*/}

      {/* <TextInput
      style={styles.subText}
      placeholder= "Enter something"
      onSubmitEditing= {testing}
      />
      <StatusBar style="auto" />*/}
    
    </ImageBackground>
    
  );
}

export default HomeScreen;