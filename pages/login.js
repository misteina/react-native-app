import React, { useState } from 'react';
import styles from '../styles';
import Button from '../components/button';
import Logo from '../components/logo';
import { Text, TextInput, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function Login(){
    const [phoneNumber, setPhoneNumber] = useState('Phone Number');
    const [password, setPassword] = useState('Password');

    const login = () => {
        
    }

    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Logo />
                <Text style={styles.welcomeBack}>Welcome Back!</Text>
                <Text style={styles.words}>Let's help you get the funds you need</Text>
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
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <Button title="LOGIN" style={styles.button} onPress={login} />
            </ScrollView>
        </View>
    );
}