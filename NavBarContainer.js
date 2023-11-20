import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import PointsDisplay from './PointsDisplay';

//Screens
import GlossaryScreen from './Glossary'
import LevelMap from './LevelMap';
import SettingScreen from './Setting';


//Screen Names
const level = 'Level';
const setting = 'Setting';
const glossaryName = 'Glossary';

const Tab = createBottomTabNavigator();

export default function NavContainer() {
    return(
            <Tab.Navigator 
                initialRouteName={level}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === level) {
                            iconName = focused ? 'restaurant' : 'restaurant-outline'
                        } 
                        else if (rn === glossaryName) {
                            iconName = focused ? 'bookmarks' : 'bookmarks-outline'
                        }
                        else if (rn === setting) {
                            iconName = focused ? 'settings' : 'settings-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}>
                    <Tab.Screen name = {level} component={(LevelMap)}/>
                    <Tab.Screen name = {glossaryName} component={(GlossaryScreen)}/>
                    <Tab.Screen name = {setting} component={(SettingScreen)}/>
            </Tab.Navigator>
    )
}