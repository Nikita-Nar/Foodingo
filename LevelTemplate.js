
import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Appbar, Searchbar, Card, Paragraph} from 'react-native-paper';
import { ScrollView } from 'react-native';
import styles from "./styles";

const FinishRecipeButton = ({title, onPress}) => {
  return(
      <TouchableOpacity style={styles.quizButton} onPress={onPress}>
           <Text style ={styles.homeButtonText}> {title} </Text>
      </TouchableOpacity>
  );
};

export default function LevelTemplate( {route, navigation} ) {
  const [meals, setMeals] = useState([]);
  const  [searchQuery, setSearchQuery] = useState('');
  const url ="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
  const getMeals = async () =>{
  const response = await fetch(url);
  const data = await response.json();
  setMeals(data.meals);
   
 }

  useEffect(()=>{
    getMeals();
  },[])

  const pressHandler = () => {
    if(route.params.param){
      navigation.navigate('MiniQuiz' , {level: route.params.level, param: true})
    }
    else[
      navigation.navigate('MiniQuiz' , {param: false})
    ]
  }
  
  const onChangeSearch = query =>setSearchQuery(query);
  return (
    <View>
      <Appbar>
        <Appbar.Content title = "Let's begin!"/>
      </Appbar>
      <Searchbar 
      placeholder='search'
      value={searchQuery}
      onChangeText={onChangeSearch}
      />

      <ScrollView>
        {
          meals.map(meal=>(
            <Card key={meal.idMeal}>
              <Card.Cover source= {{ uri: meal.strMealThumb }} />
              <Card.Title title = {meal.strMeal}/>
              <Card.Content>
                 
                <Paragraph>
                  {meal.strIngredient1} - {meal.strMeasure1}{'\n'}
                  {meal.strIngredient2} - {meal.strMeasure2}{'\n'}
                  {meal.strIngredient3} - {meal.strMeasure3}{'\n'}
                  {meal.strIngredient4} - {meal.strMeasure4}{'\n'}
                  {meal.strIngredient5} - {meal.strMeasure5}{'\n'}
                  {meal.strIngredient6} - {meal.strMeasure6}{'\n'}
                  {meal.strIngredient7} - {meal.strMeasure7}{'\n'}
                  {meal.strIngredient8} - {meal.strMeasure8}{'\n'}
                    
                  {'\n'}
                  {meal.strInstructions}
                </Paragraph>

                <FinishRecipeButton 
                  title = "Finish"
                  onPress={() => pressHandler()
                }
                /> 

                <Paragraph>
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  {'\n'}
                </Paragraph>
              </Card.Content>
            </Card>
          ))
        }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

 /*
 (property) Title: {
    ({ title, titleStyle, titleNumberOfLines, titleVariant, titleMaxFontSizeMultiplier, subtitle, subtitleStyle, subtitleNumberOfLines, subtitleVariant, subtitleMaxFontSizeMultiplier, left, leftStyle, right, rightStyle, style, theme: themeOverrides, }: Props): React.JSX.Element;
    displayName: string;
}


