import React from 'react'; 
import {View, Text} from 'react-native';
import styles from './styles';


const PointsDisplay = ({points}) => {

    console.log('PointsDisplay rendered with points: ', points);

    return(
        <View style={styles.pointsContainer}>
            <Text style={styles.pointsText}>
                EXP: {points}
            </Text>
        </View>
    );
};


export default PointsDisplay; 