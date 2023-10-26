import React from 'react';
import HomeScreen from './HomeScreen';
import AssessmentScreen from './AssessmentScreen';
import DifficultySelection from './DifficultySelection'
import LevelMap from './LevelMap';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
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
          component={AssessmentScreen}
          options={{title: 'Assesment'}}       
        />
        <Stack.Screen 
          name="LevelMap"
          component={LevelMap}
          options={{title: 'LevelMap'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

