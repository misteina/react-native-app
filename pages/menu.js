import React from 'react';
import styles from '../styles';
import MenuBar from '../components/menubar';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';


export default function Menu(){
    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.menuScrollView}>
                <TouchableOpacity style={styles.menuOption}>
                    <Text style={styles.optionText}>Loan Procedure</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuOption}>
                    <Text style={styles.optionText}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuOption}>
                    <Text style={styles.optionText}>Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuOption}>
                    <Text style={styles.optionText}>Exit</Text>
                </TouchableOpacity>
            </ScrollView>
            <MenuBar icon="more" />
        </View>
    );
}