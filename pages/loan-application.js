import React, { useState } from 'react';
import styles from '../styles';
import { Picker } from '@react-native-community/picker';
import { Text, TextInput, Button, View } from 'react-native';


export default function LoanApplication(){
    const [amount, setAmount] = useState('Select Amount');
    const [duration, setDuration] = useState('Set Duration');

    const applyForLoan = () => {

    }

    return (
        <View>
            <Picker
                selectedValue={amount}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setAmount(itemValue)}
            >
                <Picker.Item label="2,500" value="2500" />
                <Picker.Item label="5,000" value="5,000" />
                <Picker.Item label="10,000" value="10,000" />
                <Picker.Item label="20,000" value="20,000" />
                <Picker.Item label="40,000" value="40,000" />
                <Picker.Item label="80,000" value="80,000" />
                <Picker.Item label="100,000" value="100,000" />
                <Picker.Item label="120,000" value="120,000" />
                <Picker.Item label="150,000" value="150,000" />
            </Picker>
            <TextInput
                style={styles.textInput}
                onChangeText={text => setDuration(text)}
                value={duration}
            />
            <Text>Loan Summary</Text>
            <View>
                <Text>Amount</Text><Text>Interest Rate</Text><Text>Total Repayment</Text>
                <Text>2,500</Text><Text>20%</Text><Text>5,000</Text>
            </View>
            <Button title="APPLY" style={styles.button} onPress={applyForLoan} />
        </View>
    );
}