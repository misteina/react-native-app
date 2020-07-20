import React from 'react';
import styles from '../styles';
import MenuBar from '../components/menubar';
import { Text, Image, ScrollView, View } from 'react-native';


export default function About(){
    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={{...styles.scrollView, paddingBottom: 150}}>
                <Image style={styles.aboutLogo} source={require('../assets/logo2.png')} />
                <Text style={styles.aboutText}>
                    We are your premium financial partners, always ready to support your financial needs.
                </Text>
                <Text style={styles.aboutText}>
                    The RedRock Finance platform specializes in connecting borrowers and lenders. Our goal is to provide financial access to all our customers and provide the necessary finance technology and infrastructure needed to take our customers to their next level financially.
                </Text>
            </ScrollView>
            <MenuBar icon="more" />
        </View>
    );
}