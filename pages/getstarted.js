import React from 'react';
import styles from '../styles';
import { ImageBackground, Text, Button, Image } from 'react-native';

export default function GetStarted({navigation}) {
    const userStatus = async () => await AsyncStorage.getItem('status');

    const goToPage = () => {
        //AsyncStorage.setItem('status', 'Register');
        navigation.navigate('Register');
    }

    if (userStatus() !== null){
        return (
            <ImageBackground source={'../assets/bgimg.svg'} style={styles.bgimg}>
                <Image source={'../assets/shape.svg'} style={styles.shape} />
                <Text style={styles.getLoans}>
                    GET LOANS AT REDROCK
                </Text>
                <Text style={styles.intro}>
                    Our company aim to simplify and open financial access to all well-meaning Nigerians. At Redrock Finance, we are availaible every moment for the funds you need.
                </Text>
                <Button title="GET STARTED" style={styles.button} onPress={goToPage} />
            </ImageBackground>
        );
    } else {
        return null;
    }
}