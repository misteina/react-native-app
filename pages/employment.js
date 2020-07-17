import React from 'react';
import styles from '../styles';
import Button from '../components/button';
import { Picker, TextInput, ScrollView, View } from 'react-native';


export default function Employment(){
    const [employment, setEmployment] = React.useState('Employment Status');
    const [company, setCompany] = React.useState('Employer Company Name');
    const [income, setIncome] = React.useState('Monthly Income');
    const [employmentDate, setEmploymentDate] = React.useState('Employment Date');
    const [companyAddress, setCompanyAddress] = React.useState('Company Address');
    const [state, setState] = React.useState('State');
    const [city, setCity] = React.useState('City');

    const submitDetails = () => {
        
    }

    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Picker
                    selectedValue={employment}
                    onValueChange={value => setEmployment(value)}
                    style={styles.picker}
                    mode="dropdown"
                    itemStyle={{ color: 'red', fontWeight: '900', fontSize: 18, padding: 30 }}>
                    <Picker.Item label="Right Hand" value="right" />
                    <Picker.Item label="Left Hand" value="left" />
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
                <Button title="SUBMIT" onPress={submitDetails} />
            </ScrollView>
        </View>
    );
}