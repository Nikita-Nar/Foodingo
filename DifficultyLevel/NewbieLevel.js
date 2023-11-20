import { useState } from 'react';

import {SectionList, Pressable, StyleSheet, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
    flex: 1,
    
    paddingTop: 22,
  },
  appTitle: {
    fontFamily: 'Avenir-Roman',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
  sectionHeader: {
    backgroundColor: '',
    marginTop: 16,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
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

});


const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Newbie Assesment</Text>
      <SectionList
        sections={[
          {title: 'To cook pasta, you must: _________, until desired state is reached ', 
          data: ['Put into cold water then boil', 
          'Put into simmmering water and continue simmering', 'Put into boiling water and keep boiling', 
          'None of the above']},
          {
            title: 'Question 2',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
            ],
          },
          {
            title: 'Question 3',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
            ],
          },
          {
            title: 'Question 4',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
            ],
          },
        ]}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        renderItem={({item}) => <View style={styles.checkboxContainer}><MyCheckbox /><Text style={styles.item}>{item}</Text></View>}

        keyExtractor={item => `basicListEntry-${item}`}
      />
    
    </View>
  );
};


export default SectionListBasics;