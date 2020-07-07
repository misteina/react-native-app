import React, { useState } from 'react';
import styles from '../styles';
import { Text, TextInput, Button, View, ImageBackground } from 'react-native';


export default function Login(){
    const [phoneNumber, setPhoneNumber] = useState('Phone Number');
    const [password, setPassword] = useState('Password');

    const login = () => {
        
    }

    return (
        <View>
            <ImageBackground source={require('../assets/logo2.svg')}>
                <Image source={require('../assets/shape.png')} />
                <Text>Welcome Back</Text>
                <Text>Let's help you get the funds you need</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setPhoneNumber(text)}
                    value={phoneNumber}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
                <Text>Forgot Password</Text>
                <Button title="LOGIN" style={styles.button} onPress={login} />
            </ImageBackground>
        </View>
    );
}