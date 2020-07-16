import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles';


export default function Button({title, onPress}){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={onPress}>{title}</Text>
        </TouchableOpacity>
    );
}