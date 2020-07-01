import React, { useState } from 'react';
import styles from '../styles';
import { TextInput, Button, View } from 'react-native';


export default function CardDetails(){
    const [name, setName] = useState('NAME ON CARD');
    const [cardNumber, setCardNumber] = useState('CARD NUMBER');
    const [expiryDate, setExpiryDate] = useState('EXPIRY DATE');
    const [cvv, setCvv] = useState('CVV');

    const submitDetails = () => {
        
    }

    return (
        <View>
            <TextInput 
                style={styles.textInput}
                onChangeText={text => setName(text)}
                value={name}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={text => setCardNumber(text)}
                value={cardNumber}
            />
            <TextInput
                style={styles.textInput2}
                onChangeText={text => setExpiryDate(text)}
                value={expiryDate}
            />
            <TextInput
                style={styles.textInput3}
                onChangeText={text => setCvv(text)}
                value={cvv}
            />
            <Button title="SUBMIT" style={styles.button} onPress={submitDetails} />
        </View>
    );
}