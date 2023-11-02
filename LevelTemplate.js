import React from "react";
import {View, Text, ImageBackground, Image, ScrollView} from "react-native";
import styles from "./styles";


const LevelTemplate = () => {
    const placeholderImage = require('./assets/bg1.jpg')
    return (
        <ScrollView style={{flex:1}}>
        <View style={{flex:1}}>
            <Text style={styles.headerTextLevel}>
                LEVEL NAME
            </Text>
            <Image source={placeholderImage} style={styles.levelIntroImage} />
            <Text>
                WHAT YOU'LL NEED:{'\n'}
                - lorem ipsum{'\n'}
                - lorem ipsum{'\n'}
                - lorem ipsum{'\n'}
            </Text>
            <Text>
                WHAT YOU'LL LEARN:{'\n'}
                - lorem ipsum{'\n'}
                - lorem ipsum{'\n'}
                - lorem ipsum{'\n'}
            </Text>
            <Text>
                INTRO AND NEW TERM DEFINITIONS{'\n'}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est l {'\n'}
            </Text>
            <Image source={placeholderImage} style={styles.logo} />
            <Text>
                LETS GET COOKING!{'\n'}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est l
            </Text>
    
        </View>
        </ScrollView>

    );
};

export default LevelTemplate; 