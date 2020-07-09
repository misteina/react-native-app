import React, { useState } from 'react';
import styles from '../styles';
import Button from '../components/button';
import Logo from '../components/logo';
import { Text, TextInput, View } from 'react-native';


export default function SendVerificationCode(){
    const [phoneNumber, setPhoneNumber] = React.useState('Your Phone Number');

    const sendCode = () => {

    }
    
    return (
        <View style={styles.sendCode}>
            <Logo />
            <Text style={styles.welcome}>Welcome To RedRock Finance!</Text>
            <Text style={styles.words}>Let's help you get the funds you need.</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={text => setPhoneNumber(text)}
                value={phoneNumber}
            />
            <Button title="SEND CODE" onPress={sendCode} />
        </View>
    );
}