import React from 'react';
import styles from '../styles';
import { Picker } from '@react-native-community/picker';
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
            <Picker
                selectedValue={bank}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setBank(itemValue)}
            >
                <Picker.Item label="ACCESS BANK" value="ACCESS BANK" />
                <Picker.Item label="GTBANK" value="GTBANK" />
                <Picker.Item label="UBA" value="UBA" />
            </Picker>
            <Button title="SUBMIT" style={styles.button} onPress={submitDetails} />
        </View>
    );
}