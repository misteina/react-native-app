import React, { useState } from 'react';
import styles from '../styles';
import Button from '../components/button';
import MenuBar from '../components/menubar';
import { Text, View, ScrollView, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native';


export default function PersonalDetails(){
    const details = {
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        sex: "",
        maritalStatus: "",
        numberOfDependents: "",
        homeAddress: "",
        state: "",
        city: ""
    }

    const [userDetails, setUserDetails] = useState(details);

    try {
        AsyncStorage.getItem('PERSONAL_DETAILS').then(
            details => {
                if (details !== null){
                    setUserDetails(JSON.parse(details))
                }
            }
        ).catch(
            () => {return}
        );
    } catch (error) {
        // handle error
    }

    const updateDetails = () => {
        let hey = null;
    }

    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={{...styles.scrollView, paddingBottom: '110%'}}>
                <Text style={{...styles.fieldTitle, marginTop: '5%'}}>First Name</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => setUserDetails(userDetails => ({ ...userDetails, firstName: text }))}
                    value={userDetails.firstName}
                />
                <Text style={styles.fieldTitle}>Last Name</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => setUserDetails(userDetails => ({ ...userDetails, lastName: text }))}
                    value={userDetails.lastName}
                />
                <Text style={styles.fieldTitle}>Email</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => setUserDetails(userDetails => ({ ...userDetails, email: text }))}
                    value={userDetails.email}
                />
                <Text style={styles.fieldTitle}>Date Of Birth</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => setUserDetails(userDetails => ({ ...userDetails, dateOfBirth: text }))}
                    value={userDetails.dateOfBirth}
                />
                <Text style={styles.fieldTitle}>Sex</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => setUserDetails(userDetails => ({ ...userDetails, sex: text }))}
                    value={userDetails.sex}
                />
                <Text style={styles.fieldTitle}>Marital Status</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => setUserDetails(userDetails => ({ ...userDetails, maritalStatus: text }))}
                    value={userDetails.maritalStatus}
                />
                <Text style={styles.fieldTitle}>Number of Dependents</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => setUserDetails(userDetails => ({ ...userDetails, numberOfDependents: text }))}
                    value={userDetails.numberOfDependents}
                />
                <Text style={styles.fieldTitle}>Home Address</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => setUserDetails(userDetails => ({ ...userDetails, homeAddress: text }))}
                    value={userDetails.homeAddress}
                />
                <Text style={styles.fieldTitle}>State</Text>
                <TextInput
                    style={styles.details}
                    onChangeText={text => setUserDetails(userDetails => ({ ...userDetails, state: text }))}
                    value={userDetails.state}
                />
                <Text style={styles.fieldTitle}>City</Text>
                <TextInput
                    style={{...styles.details, marginBottom: 50}}
                    onChangeText={text => setUserDetails(userDetails => ({ ...userDetails, city: text }))}
                    value={userDetails.city}
                />
                <Button title="UPDATE" onPress={updateDetails} />
            </ScrollView>
            <MenuBar icon="more" />
        </View>
    );
}