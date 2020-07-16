import React, { useState, useRef } from 'react';
import styles from '../styles';
import Button from '../components/button';
import { Text, View, ScrollView, TextInput, AsyncStorage } from 'react-native';


export default function PersonalDetails(){
    const details = {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        dateOfBirth: "Date Of Birth",
        sex: "Sex",
        maritalStatus: "Marital Status",
        numberOfDependents: "Number Of Dependents",
        homeAddress: "Home Address",
        state: "State",
        city: "City"
    }

    const [userDetails, setUserDetails] = useState(details);

    try {
        AsyncStorage.getItem('personalDetails').then(details => setUserDetails(JSON.parse(details)));
    } catch (error) {
        // handle error
    }
    
    const [firstName, setFirstName] = useState(userDetails.firstName);
    const [lastName, setLastName] = useState(userDetails.lastName);
    const [email, setEmail] = useState(userDetails.email);
    const [dateOfBirth, setDateOfBirth] = useState(userDetails.dateOfBirth);
    const [sex, setSex] = useState(userDetails.sex);
    const [maritalStatus, setMaritalStatus] = useState(userDetails.maritalStatus);
    const [numberOfDependents, setNumberOfDependents] = useState(userDetails.numberOfDependents);
    const [homeAddress, setHomeAddress] = useState(userDetails.homeAddress);
    const [state, setState] = useState(userDetails.state);
    const [city, setCity] = useState(userDetails.city);

    const updateButton = useRef();

    const activateUpdateButton = (inputText, setInputState) => {
        updateButton.current.disabled = false;
        setInputState(inputText);
    }

    const updateDetails = () => {

    }

    return (
        <View style={styles.view}>
            <ScrollView style={styles.scrollView}>
                <Text>First Name</Text><Text>Last Name</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => activateUpdateButton(text, setFirstName)}
                    value={firstName}
                />
                <TextInput
                    style={styles.details}
                    onChangeText={text => activateUpdateButton(text, setLastName)}
                    value={lastName}
                />
                <Text>Email</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => activateUpdateButton(text, setEmail)}
                    value={email}
                />
                <Text>Date Of Birth</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => activateUpdateButton(text, setDateOfBirth)}
                    value={dateOfBirth}
                />
                <Text>Sex</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => activateUpdateButton(text, setSex)}
                    value={sex}
                />
                <Text>Marital Status</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => activateUpdateButton(text, setMaritalStatus)}
                    value={maritalStatus}
                />
                <Text>Number of Dependents</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => activateUpdateButton(text, setNumberOfDependents)}
                    value={numberOfDependents}
                />
                <Text>Home Address</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => activateUpdateButton(text, setHomeAddress)}
                    value={homeAddress}
                />
                <Text>State</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => activateUpdateButton(text, setState)}
                    value={state}
                />
                <Text>City</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => activateUpdateButton(text, setCity)}
                    value={city}
                />
                <Button title="UPDATE" ref={updateButton} disabled={true} style={styles.button} onPress={updateDetails} />
            </ScrollView>
        </View>
    );
}