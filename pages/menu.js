import React, { useState } from 'react';
import styles from '../styles';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';


export default function Menu(){
    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text>hey</Text>
            </ScrollView>
        </View>
    );
}