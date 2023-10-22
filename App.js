import React from 'react';
import HomeScreen from './HomeScreen';
import StartAssesment from './StartAssesment';
import LevelMap from './LevelMap';
import DifficultySelection from './DifficultySelection';
import NewbieLevel from './DifficultyLevel/NewbieLevel';
import NoviceLevel from './DifficultyLevel/NoviceLevel';
import MidTierLevel from './DifficultyLevel/MidTierLevel';
import AdvancedLevel from './DifficultyLevel/AdvancedLevel';
import ExpertLevel from './DifficultyLevel/ExpertLevel';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

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
          options={{title: 'Level Map'}}
        />
        {/*<Stack.Screen 
          name="DifficultySelection"
          component={DifficultySelection}
          options={{title: 'Difficulty Selection', headerBackVisible: false}}
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
        />*/}
      </Stack.Navigator>
    </NavigationContainer>

  );