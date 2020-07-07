import React from 'react';
import styles from '../styles';
import Button from '../components/button';
import { ImageBackground, View, Text, Image } from 'react-native';

export default function GetStarted({navigation}) {
    const goToPage = () => {
        //AsyncStorage.setItem('status', 'Register');
        navigation.navigate('Register');
    }

    return (
        <View>
            <ImageBackground source={require('../assets/bgimg.png')} style={styles.bgimg}>
                <Image source={require('../assets/shape.png')} style={styles.shape} />
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Text style={styles.getLoans}>
                    GET LOANS AT REDROCK
                </Text>
                <Text style={styles.intro}>
                    Our company aim to simplify and open financial access to all well-meaning Nigerians. At Redrock Finance, we are availaible every moment for the funds you need.
                </Text>
                <Button title="GET STARTED" onPress={goToPage} />
            </ImageBackground>
        </View>
    );
}