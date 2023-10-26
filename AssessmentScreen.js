import { useState } from 'react';
import {SectionList, Pressable, Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { sectionListData } from './SectionListData'; 

const FinishAssessmentButton = ({title, onPress}) => {
  return(
      <TouchableOpacity style={styles.button} onPress={onPress}>
           <Text style ={styles.buttonText}> {title} </Text>
      </TouchableOpacity>
  );
};

function MyCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}>
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 22,
    paddingBottom: 22
  },
  appTitle: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    paddingBottom: 22,
    fontSize: 22,
  },
  sectionHeader: {
    backgroundColor: '',
    paddingStart: 12,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'left',
    fontFamily: 'Avenir',
    fontSize: 20,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  item: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
    padding: 16,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    alignContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ff0000',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#ff0000',
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
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      letterSpacing: 3,
      fontSize: 20,
      textDecorationLine: 'none', 
      marginLeft: 10,
  },

});


const SectionListBasics = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Select the box with the correct answer:</Text>
      <SectionList
        sections={sectionListData}
        //   [
        //   {title: 'Question 1', 
        //   data: [
        //     'one', 
        //     'two', 
        //     'three', 
        //     'four',]},
        //   {
        //     title: 'Question 2',
        //     data: [
        //       'one',
        //       'two',
        //       'three',
        //       'four',
        //     ],
        //   },
        //   {
        //     title: 'Question 3',
        //     data: [
        //       'one',
        //       'two',
        //       'three',
        //       'four',
        //     ],
        //   },
        //   {
        //     title: 'Question 4',
        //     data: [
        //       'one',
        //       'two',
        //       'three',
        //       'four',
        //     ],
        //   },
        // ]}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        renderItem={({item}) => <View style={styles.checkboxContainer}>
          <MyCheckbox />
          <Text style={styles.item}>{item}</Text>
          </View>}

        keyExtractor={item => `basicListEntry-${item}`}
      />

      <FinishAssessmentButton 
        title = "Finish"
        onPress={() => navigation.navigate('LevelMap')}
      />  
    
    </View>
  );
};


export default SectionListBasics;