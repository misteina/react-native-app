import React, { useState } from 'react';
import styles from '../styles';
import { Picker } from '@react-native-community/picker';
import { Text, TextInput, Button, View } from 'react-native'


export default function Employment(){
    const [employment, setEmployment] = useState('Employment Status');
    const [company, setCompany] = useState('Employer Company Name');
    const [income, setIncome] = useState('Monthly Income');
    const [employmentDate, setEmploymentDate] = useState('Employment Date');
    const [companyAddress, setCompanyAddress] = useState('Company Address');
    const [state, setState] = useState('State');
    const [city, setCity] = useState('City');

    const submitDetails = () => {
        
    }

    return (
        <View>
            <Picker
                selectedValue={employment}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setEmployment(itemValue)}
            >
                <Picker.Item label="Employed" value="Employed" />
                <Picker.Item label="Self-employed" value="Self-employed" />
                <Picker.Item label="Unemployed" value="Unemployed" />
            </Picker>
            <TextInput 
                style={styles.textInput}
                onChangeText={text => setCompany(text)}
                value={company}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={text => setIncome(text)}
                value={income}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={text => setEmploymentDate(text)}
                value={employmentDate}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={text => setCompanyAddress(text)}
                value={companyAddress}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={text => setState(text)}
                value={state}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={text => setCity(text)}
                value={city}
            />
            <Button title="SUMBIT" style={styles.button} onPress={submitDetails} />
        </View>
    );
}