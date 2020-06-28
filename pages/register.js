import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../styles';
import { Text, View } from 'react-native';

export default function Sample(){
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}