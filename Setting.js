import * as React from 'react-native';
import { View, Text } from 'react-native';

export default function SettingScreen({navigation}) {
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 26, fontWeight: 'bold'}}>
                Setting
            </Text>
        </View>
    );
}