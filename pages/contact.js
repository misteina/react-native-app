import React, { useState } from 'react';
import styles from '../styles';
import { Text, TextInput, Button, View } from 'react-native';


export default function Contact(){
    const [name, setName] = useState('NAME');
    const [email, setEmail] = useState('Email Address');
    const [subject, setSubject] = useState('Subject');
    const [message, setMessage] = useState('Message');

    const sendMessage = () => {

    }

    return (
        <View>
            <Image style={styles.topLogo} source={require('../assets/logo2.svg')} />
            <Text>Phone Number:</Text>
            <Text>+234 814 300 3142</Text>
            <Text>Email Address:</Text>
            <Text>info@redrockng.com</Text>
            <Text>You may contact us by filling this form anytime you need support</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={text => setName(text)}
                value={name}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={text => setSubject(text)}
                value={subject}
            />
            <TextInput
                multiline={true}
                maxLength={600}
                style={styles.multilineText}
                onChangeText={text => setMessage(text)}
                value={message}
            />
            <Button title="SEND" style={styles.button} onPress={sendMessage} />
        </View>
    );
}