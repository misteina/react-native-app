import React from 'react';
import styles from '../styles';
import { Text, Image, View } from 'react-native';

export default function About(){
    return (
        <View>
            <Image source={require('../assets/logo2.svg')} />
            <Text>
                We are your premium financial partners, always ready to support your financial needs.
            </Text>
            <Text>
                The RedRock Finance platform specializes in connecting borrowers and lenders. Our goal is to provide financial access to all our customers and provide the necessary finance technology and infrastructure needed to take our customers to their next level financially.
            </Text>
        </View>
    );
}