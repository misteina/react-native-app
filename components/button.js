import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';


export default function Button({title, onPress}){
    return(
        <View style={styles.button}>
            <Text style={styles.buttonText} onPress={onPress}>{title}</Text>
        </View>
    );
}