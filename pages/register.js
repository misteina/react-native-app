import React, { useState } from 'react';
import styles from '../styles';
import Button from '../components/button';
import Logo from '../components/logo';
import { TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Register(){
    const [verificationCode, setVerificationCode] = useState('Enter Verification Code');
    const [bvn, setBvn] = useState('Enter Your BVN');
    const [password, setPassword] = useState('Set Password');
    const [confirmPassword, setConfirmPassword] = useState('Confirm Password');

    const register = () => {

    }

    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Logo />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setVerificationCode(text)}
                    value={verificationCode}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setBvn(text)}
                    value={bvn}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmPassword}
                />
                <Button title="REGISTER" style={styles.button} onPress={register} />
            </ScrollView>
        </View>
    );
}