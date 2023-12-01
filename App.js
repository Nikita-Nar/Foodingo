import React from 'react';
import HomeScreen from './HomeScreen';
import AssessmentScreen from './AssessmentScreen';
import MiniQuiz from './MiniQuiz';
import DifficultySelection from './DifficultySelection'
import LevelMap from './LevelMap';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavContainer from './NavBarContainer';
import LevelTemplate from './LevelTemplate';
import LoginPage from './Login';

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={LoginPage}
          options={{title: 'Login'}}       
        />
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
          name="Recipes"
          component={LevelTemplate}
          options={{title: 'Recipes'}}       
        />
        <Stack.Screen 
          name="MiniQuiz"
          component={MiniQuiz}
          options={{title: 'Mini-Quiz Time!'}}       
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

