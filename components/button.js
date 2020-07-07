import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';


export default function Button({title, onPressAction}){
    return(
        <View style={styles.button}>
            <Text style={styles.buttonText} onPress={onPressAction}>{title}</Text>
        </View>
    );
}