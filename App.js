import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const logoImage = require('./DingoLogo.jpg');


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Culinary Journet Starts Here</Text>
      <Image source={logoImage} style={styles.logo}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightsalmon',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '30%'
   // marginTop: 50,
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
