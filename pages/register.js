import React, { useState } from 'react';
import styles from '../styles';
import { TextInput, View, ImageBackground, Button } from 'react-native';

export default function Register(){
    const [verificationCode, setVerificationCode] = useState('Enter Verification Code');
    const [bvn, setBvn] = useState('Enter Your BVN');
    const [password, setPassword] = useState('Set Password');
    const [confirmPassword, setConfirmPassword] = useState('Confirm Password');

    const register = () => {

    }

    return (
        <View>
            <ImageBackground style={styles.bgimg} source={require('../assets/logo2.svg')}>
                <TextInput
                    style={styles.details}
                    onChangeText={text => setVerificationCode(text)}
                    value={verificationCode}
                />
                <TextInput
                    style={styles.details}
                    onChangeText={text => setBvn(text)}
                    value={bvn}
                />
                <TextInput
                    style={styles.details}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
                <TextInput
                    style={styles.details}
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmPassword}
                />
                <Button title="REGISTER" style={styles.button} onPress={register} />
            </ImageBackground>
        </View>
    );
}