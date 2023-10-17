import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, Image, ImageBackground, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StartAssesment from './StartAssesment';
import LevelMap from './LevelMap';
import NewbieLevel from './DifficultyLevel/NewbieLevel';
import NoviceLevel from './DifficultyLevel/NoviceLevel';
import MidTierLevel from './DifficultyLevel/MidTierLevel';
import AdvancedLevel from './DifficultyLevel/AdvancedLevel';
import ExpertLevel from './DifficultyLevel/ExpertLevel';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const logoImage = require('./assets/DingoLogo.jpg');
const BackgroundImg = require('./assets/StartingBG.jpg');
const Stack = createNativeStackNavigator();

const AssessmentButton = ({title, onPress}) => {
  return(
      <TouchableOpacity style={styles.button} onPress={onPress}>
           <Text style ={styles.buttonText}> {title} </Text>
      </TouchableOpacity>
  );
};

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={BackgroundImg} style={styles.container}>
      <Image source={logoImage} style={styles.logo}/>

      <Text style={styles.headerText}>Welcome</Text>
      <Text style={styles.chefText}>CHEF</Text>
      
      <Text style={styles.subText}>Let's assess your culinary skills!</Text>

      <AssessmentButton 
        title = "Start Assessment"
        onPress={() => navigation.navigate('StartAssesment')}
      />  

      <AssessmentButton  
        title = "Skip"
        onPress={() => navigation.navigate('LevelMap')}
      />  
      <Text style={styles.subText}>Choose your own level?</Text>
      
      <StatusBar style="auto" />

    </ImageBackground>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerShown: false,
            headerStyle: {
              backgroundColor: 'lightsalmon'
            }
          }}
        />
        <Stack.Screen 
          name="StartAssesment"
          component={StartAssesment}
          options={{title: 'Assesment Page'}}
        />
        <Stack.Screen 
          name="LevelMap"
          component={LevelMap}
          options={{title: 'Level Map', headerBackVisible: false}}
        />
        <Stack.Screen 
          name="NewbieLevel"
          component={NewbieLevel}
          options={{title: 'Newbie Level'}}
        />
        <Stack.Screen 
          name="NoviceLevel"
          component={NoviceLevel}
          options={{title: 'Novice Level'}}
        />
        <Stack.Screen 
          name="MidTierLevel"
          component={MidTierLevel}
          options={{title: 'Mid-Tier Level'}}
        />
        <Stack.Screen 
          name="AdvancedLevel"
          component={AdvancedLevel}
          options={{title: 'Advanced Level'}}
        />
        <Stack.Screen 
          name="ExpertLevel"
          component={ExpertLevel}
          options={{title: 'Expert Level'}}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '5%'
  },
  headerText: {
    color: 'white',
    fontSize: 67,
    fontFamily: 'Times New Roman',
    letterSpacing: 3,
    textAlign: 'center',
  },
  chefText: {
    color: 'white',
    fontSize: 37,
    fontFamily: 'Avenir-Roman',
    letterSpacing: 7,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  subText: {
    color: '#d4081d',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    letterSpacing: 1,
    width: 300,
    paddingBottom: 30,
  },
  logo: {
    width: 150,
    height: 150, 
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 150,
    paddingBottom: '5%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
    height: 40,
    marginBottom: 10,
    borderRadius: 40,
    backgroundColor: 'rgba(255 255 255/ 0.5)',
},
  buttonText: {
      textTransform: 'uppercase',
      color: '#f04713',
      fontFamily: 'Arial-BoldMT',
      fontWeight: 'bold',
      letterSpacing: 3,
      fontSize: 20,
      textDecorationLine: 'none', 
      marginLeft: 10,
  },
});