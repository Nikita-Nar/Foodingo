import { useState } from 'react';
import {SectionList, Pressable, Button, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { sectionListData } from './SectionListData'; 
import styles from "./styles";

const FinishAssessmentButton = ({title, onPress}) => {
  return(
      <TouchableOpacity style={styles.homeButton} onPress={onPress}>
           <Text style ={styles.homeButtonText}> {title} </Text>
      </TouchableOpacity>
  );
};

let answerArr = [];
let correctAnswer = 0;
let isChecked = [];


const MyCheckbox = ({index, sectionIndex}) =>{
  const [checked, setChecked] = useState(false);

  function pressHandle(){
    switch(sectionIndex){
      case 0:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 1:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 3){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 3){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 2:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 0){
          answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 0){
          answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
          }
        break;
      case 3:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
         }
        else if(checked === true){
          setChecked(!checked)
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 4:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 5:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 6:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 3){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 3){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 7:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 0){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 0){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 8:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 9:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 3){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 3){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 10:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break; 
      case 11:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 0){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 0){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
        case 12:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 13:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 2){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
      case 14:
        if(!isChecked[sectionIndex]){
          setChecked(!checked)
          isChecked[sectionIndex] = true
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
        }
        else if(checked === true){
          setChecked(!checked)
          if (index === 1){
            answerArr[sectionIndex] = !checked
          }
          isChecked[sectionIndex] = false
        }
        break;
    }
  }
  
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => pressHandle()}>
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
   
  );
}

const SectionListBasics = ({ navigation }) => {
  const Finish = () => {
    for(let i = 0; i < answerArr.length; i++){
      if(answerArr[i] === true){
        correctAnswer++
      }
    }
    if(correctAnswer < 4){
      Alert.alert("Congratulation", "You are a Newbie. You start from level 1.  Click the Go To Latest Level button to go to the current latest level you have unlocked.");
      navigation.navigate('LevelMap', {screen: 'Level', params:{level: 1},})
    }
    else if(correctAnswer < 7){
      Alert.alert("Congratulation", "You are a Novice. You may start at level 5. Click the Go To Latest Level button to go to the current latest level you have unlocked.");
      navigation.navigate('LevelMap', {screen: 'Level', params:{level: 5},})
    }
    else if(correctAnswer < 10){
      Alert.alert("Congratulation", "You are a Intermediate Cook. You may start at level 9. Click the Go To Latest Level button to go to the current latest level you have unlocked.");
      navigation.navigate('LevelMap', {screen: 'Level', params:{level: 9},})
    }
    else if(correctAnswer < 13){
      Alert.alert("Congratulation", "You are a Advance Cook. You may start at level 13. Click the Go To Latest Level button to go to the current latest level you have unlocked.");
      navigation.navigate('LevelMap', {screen: 'Level', params:{level: 13},})
    }
    else{
      Alert.alert("Congratulation", "You are a Expert Cook. You may start at level 17. Click the Go To Latest Level button to go to the current latest level you have unlocked.");
      navigation.navigate('LevelMap', {screen: 'Level', params:{level: 17},})
    }
  }

  return (
    <View style={styles.assessmentContainer}>
      <Text style={styles.appTitle}>Select the box with the correct answer:</Text>
      <SectionList 
        stickySectionHeadersEnabled = {false}
        sections={sectionListData}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        renderItem={({item, index, section}) => <View style={styles.checkboxContainer}>
          <MyCheckbox index={index} sectionIndex={section.index}/>
          <Text style={styles.item}>{item}</Text>
          </View>}

        keyExtractor={item => `basicListEntry-${item}`}
      />

      <FinishAssessmentButton 
        title = "Finish"
        onPress={() => Finish()}
      />  
    
    </View>
  );
};

export default SectionListBasics;
