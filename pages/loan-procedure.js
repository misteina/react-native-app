import React, { useState } from 'react';
import styles from '../styles';
import { Text, View, ImageBackground } from 'react-native';


export default function LoanProcedure(){
    return (
        <View>
            <ImageBackground source={require('../assets/logo2.png')}>
                <Image source={require('../assets/wallet.svg')} />
                <Text>
                    We offer loans from ₦2,500 to ₦200,000. Our loan duration varies from 7 days to 52 weeks with interest rate of 15-30% depending on the amount given. Each repayment allows you to borrow higher amounts.
                </Text>
            </ImageBackground>
        </View>
    );
}