import React from 'react';
import styles from '../styles';
import Button from '../components/button';
import { Text, ScrollView, View } from 'react-native';


export default function RepayLoan(){

    const startPayment = () => {

    }
    
    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.repay}>
                    <Text style={styles.repayText}>Borrowed Amount</Text>
                    <Text style={{...styles.repayText, ...styles.repayFigure }}>5,000</Text>
                </View>
                <View style={styles.repay}>
                    <Text style={styles.repayText}>Interest Rate</Text>
                    <Text style={{ ...styles.repayText, ...styles.repayFigure }}>20%</Text>
                </View>
                <View style={styles.repay}>
                    <Text style={styles.repayText}>Total Repayment</Text>
                    <Text style={{ ...styles.repayText, ...styles.repayFigure, fontSize: 25 }}>5,000</Text>
                </View>
                <Button title="PAY" onPress={startPayment} />
            </ScrollView>
        </View>
    );
}