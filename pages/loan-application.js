import React, { useState } from 'react';
import styles from '../styles';
import { Text, TextInput, Button, View } from 'react-native';


export default function LoanApplication(){
    const [amount, setAmount] = useState('Select Amount');
    const [duration, setDuration] = useState('Set Duration');

    const applyForLoan = () => {

    }

    return (
        <View>
            
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