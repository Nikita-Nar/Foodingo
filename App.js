import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
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

const logoImage = require('./DingoLogo.jpg');
const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Culinary Journey Starts Here</Text>
      <Image source={logoImage} style={styles.logo}/>
      <Button  
        title = "Start Assesment"
        onPress={() => navigation.navigate('StartAssesment')}
      />
      <Button  
        title = "Skip Assesment"
        onPress={() => navigation.navigate('LevelMap')}
      />
      <StatusBar style="auto" />

    </View>
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
    backgroundColor: 'lightsalmon',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '30%'
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: 300,
    height: 300, 
    marginTop: 50,
    borderRadius: 150,
  },
});


