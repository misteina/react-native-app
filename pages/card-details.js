import React from 'react';
import styles from '../styles';
import Button from '../components/button';
import { TextInput, ScrollView, View } from 'react-native';


export default function CardDetails(){
    const [name, setName] = React.useState(null);
    const [cardNumber, setCardNumber] = React.useState(null);
    const [expiryDate, setExpiryDate] = React.useState(null);
    const [cvv, setCvv] = React.useState(null);

    const submitDetails = () => {
        
    }

    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <TextInput
                    placeholder="Card Name"
                    placeholderTextColor="grey"
                    style={styles.textInput}
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <TextInput
                    placeholder="Card Number"
                    placeholderTextColor="grey"
                    style={styles.textInput}
                    onChangeText={text => setCardNumber(text)}
                    value={cardNumber}
                />
                <TextInput
                    placeholder="Expiry Date"
                    placeholderTextColor="grey"
                    style={styles.textInput}
                    onChangeText={text => setExpiryDate(text)}
                    value={expiryDate}
                />
                <TextInput
                    placeholder="CVV"
                    placeholderTextColor="grey"
                    style={styles.textInput}
                    onChangeText={text => setCvv(text)}
                    value={cvv}
                />
                <Button title="SUBMIT" onPress={submitDetails} />
            </ScrollView>
        </View>
    );
}