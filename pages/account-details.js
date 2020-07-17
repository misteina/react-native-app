import React from 'react';
import styles from '../styles';
import { TextInput, Button, View } from 'react-native';

export default function AccountDetails({navigation}) {
    const [bankAccount, setBankAccount] = React.useState('Enter Bank Account');
    const [bank, setBank] = React.useState('Select Your Bank');

    const submitDetails = () => {

    }

    return (
        <View>
            <Text>BANK ACCOUNT DETAILS</Text>
            <TextInput 
                style={styles.textInput} 
                onChangeText={text => setBankAccount(text)} 
                value={bankAccount} 
            />
            
            <Button title="SUBMIT" style={styles.button} onPress={submitDetails} />
        </View>
    );
}