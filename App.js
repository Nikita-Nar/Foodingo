import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StartAssesment from './StartAssesment';
import LevelMap from './LevelMap';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const logoImage = require('./assets/DingoLogo.jpg');
const BackgroundImg = require('./assets/StartingBG.jpg');
const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={BackgroundImg} style={styles.container}>
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo}/>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.chefText}>CHEF</Text>
        <Text style={styles.smallText}>Let's assess your culinary skills!</Text>
        <Button 
          title = "Start Assessment"
          onPress={() => navigation.navigate('StartAssesment')}
        />
        <Button  
          title = "Skip Assessment"
          onPress={() => navigation.navigate('LevelMap')}
        />
        <StatusBar style="auto" />

      </View>
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
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    color: 'white',
    fontSize: 70,
    letterSpacing: 2,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
  },
  chefText: {
    flex: 0.2,
    color: 'white',
    fontSize: 40,
    letterSpacing: 7,
    fontFamily: 'Avenir-Roman',
    textAlign: 'center',
  },
  smallText: {
    flex: 0.3,
    width: 220,
    color: '#cc1b12',
    fontSize: 29,
    letterSpacing: 1,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
  },
  logo: {
    width: 170,
    height: 170, 
    marginTop: 30,
    marginBottom: 50,
    borderRadius: 150,
  },
});


