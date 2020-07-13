import React, { useState } from 'react';
import styles from '../styles';
import { Text, Image, ScrollView, FlatList, View } from 'react-native';


export default function Home(){
    const DATA = [
        ['$5,000', '12-7-2020', 'Active'],
        ['$6,000', '16-7-2020', 'Closed']
    ];
    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.helloUser}>
                    <Text style={styles.hello}>Hello,</Text><Text style={styles.name}> Andrew</Text>
                </View>
                <View style={styles.activeLoan}>
                    <Text style={styles.activeLoanText}>Active Loan</Text>
                    <Text style={styles.activeLoanAmount}>$2,500</Text>
                    <Text style={styles.activeLoanDate}>04/07</Text>
                    <View style={styles.waveCase}>
                        <Image style={styles.wave} source={require('../assets/bg1.png')} />
                        <Image style={styles.wave2} source={require('../assets/bg2.png')} />
                    </View>
                </View>
                <View style={styles.getLoans}>
                    <Image style={styles.getLoanPic} source={require('../assets/img.png')} />
                    <Text style={styles.getLoanText}>Get loans for as low as 20% interest rate</Text>
                </View>
                <View style={styles.loanHistory}>
                    <Text style={styles.loanHistoryTitle}>Loan History</Text>
                    <View style={styles.historyHeading}>
                        <Text style={styles.headingText}>Amount</Text>
                        <Text style={styles.headingText}>Start</Text>
                        <Text style={styles.headingText}>End</Text>
                    </View>
                    <List data={DATA} />
                </View>
            </ScrollView>
        </View>
    );
}

function List({data}){
    if (data.length > 0){
        return (
            <FlatList
                data={data}
                keyExtractor={(index) => 'item' + index}
                renderItem={({ item }) => <Item data={item} />}
            />
        );
    } else {
        return <Text style={styles.noHistory}>No history available</Text>
    }
}

function Item({data}){
    return (
        <View style={styles.historyItem}>
            <Text style={styles.historyData}>{data[0]}</Text>
            <Text style={styles.historyData}>{data[1]}</Text>
            <Text style={styles.historyData}>{data[2]}</Text>
        </View>
    );
}