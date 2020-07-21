import React from 'react';
import styles from '../styles';
import Button from '../components/button';
import MenuBar from '../components/menubar';
import { Text, TextInput, Image, ScrollView, View } from 'react-native';


export default function Contact(){
    const [name, setName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [subject, setSubject] = React.useState(null);
    const [message, setMessage] = React.useState(null);

    const sendMessage = () => {

    }

    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={{...styles.scrollView, paddingBottom: '50%'}}>
                <Text style={{...styles.fieldTitle, ...styles.marginTop}}>Phone Number:</Text>
                <Text style={styles.field}>+234 814 300 3142</Text>
                <Text style={styles.fieldTitle}>Email Address:</Text>
                <Text style={styles.field}>info@redrockng.com</Text>
                <Text style={{...styles.fieldTitle, ...styles.marginTop}}>Contact Form</Text>
                <TextInput
                    placeholder="Name"
                    placeholderTextColor="grey"
                    style={styles.textInput}
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="grey"
                    style={styles.textInput}
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <TextInput
                    placeholder="Subject"
                    placeholderTextColor="grey"
                    style={styles.textInput}
                    onChangeText={text => setSubject(text)}
                    value={subject}
                />
                <TextInput
                    placeholder="Message"
                    placeholderTextColor="grey"
                    multiline={true}
                    maxLength={1000}
                    style={styles.multiLineText}
                    onChangeText={text => setMessage(text)}
                    value={message}
                />
                <Button title="SEND" style={styles.button} onPress={sendMessage} />
            </ScrollView>
            <MenuBar icon="more" />
        </View>
    );
}