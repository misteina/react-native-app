import React, { useState } from 'react';
import styles from '../styles';
import { TextInput, View } from 'react-native';


export default function SendVerificationCode(){
    const sendCode = () => {

    }
    
    return (
        <View>
            <Image source={require('../assets/img2.png')} />
            <Text>Welcome To RedRock Finance!</Text>
            <Text>Let's help you get the funds you need.</Text>
            <TextInput
                style={styles.details}
                onChangeText={text => setPhoneNumber(text)}
                value={phoneNumber}
            />
            <Button title="SEND CODE" style={styles.button} onPress={sendCode} />
        </View>
    );
}