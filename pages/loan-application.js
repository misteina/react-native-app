import React, { useState } from 'react';
import styles from '../styles';
import Button from '../components/button';
import MenuBar from '../components/menubar';
import { Picker } from '@react-native-community/picker';
import { Text, TextInput, ScrollView, View } from 'react-native';


export default function LoanApplication(){
    const [amount, setAmount] = useState(0);
    const [duration, setDuration] = useState('Set Duration');
    
    const applyForLoan = () => {
        
    }

    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={{ ...styles.pickerBox, ...styles.expand }}>
                    <Picker
                        selectedValue="0"
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setAmount(itemValue)}
                    >   
                        <Picker.Item label="Amount" value="0" />
                        <Picker.Item label="2,500" value="2500" />
                        <Picker.Item label="5,000" value="5000" />
                        <Picker.Item label="10,000" value="10000" />
                        <Picker.Item label="20,000" value="20000" />
                        <Picker.Item label="40,000" value="40000" />
                        <Picker.Item label="80,000" value="80000" />
                        <Picker.Item label="100,000" value="10000" />
                        <Picker.Item label="120,000" value="120000" />
                        <Picker.Item label="150,000" value="150000" />
                    </Picker>
                </View>
                <Text style={styles.loanDuration}>Loan Duration</Text>
                <View style={styles.dateBox}>
                    <TextInput
                        style={{ ...styles.textInput, ...styles.dateInput }}
                        placeholder="Day"
                        placeholderTextColor="grey"
                        onChangeText={text => setDuration(text)}
                    //value={duration}
                    />
                    <TextInput
                        style={{ ...styles.textInput, ...styles.dateInput }}
                        placeholder="Month"
                        placeholderTextColor="grey"
                        onChangeText={text => setDuration(text)}
                    //value={duration}
                    />
                    <TextInput
                        style={{ ...styles.textInput, ...styles.dateInput }}
                        placeholder="Year"
                        placeholderTextColor="grey"
                        onChangeText={text => setDuration(text)}
                    //value={duration}
                    />
                </View>
                <View style={styles.loanSummary}>
                    <Text style={styles.loanSummaryTitle}>Loan Summary</Text>
                    <View style={styles.summaryHeading}>
                        <Text style={styles.summaryText}>Amount</Text>
                        <Text style={{ ...styles.summaryText, ...styles.middleBorder}}>Interest Rate</Text>
                        <Text style={styles.summaryText}>Repayment</Text>
                    </View>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryData}>2,500</Text>
                        <Text style={styles.summaryData}>20%</Text>
                        <Text style={styles.summaryData}>5,000</Text>
                    </View>
                </View>
                <Button title="APPLY" onPress={applyForLoan} />
            </ScrollView>
            <MenuBar icon="home" />
        </View>
    );
}