import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles';


export default function Button({title, onPress, style}){
    let addStyle = null;
    if (typeof style !== 'undefined'){
        addStyle = { ...styles.button, position: style.position };
    } else {
        addStyle = styles.button
    }
    return(
        <TouchableOpacity style={addStyle}>
            <Text style={styles.buttonText} onPress={onPress}>{title}</Text>
        </TouchableOpacity>
    );
}