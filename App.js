import React from 'react';
import HomeScreen from './HomeScreen';
import AssessmentScreen from './AssessmentScreen';
import DifficultySelection from './DifficultySelection'
import LevelMap from './LevelMap';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavContainer from './NavBarContainer';
import LevelTemplate from './LevelTemplate';


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
          component={NavContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Recipies"
          component={LevelTemplate}
          options={{title: 'Recipies'}}       
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

