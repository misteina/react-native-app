import React, { useState } from 'react';
import styles from '../styles';
import { Text, Image, ScrollView, FlatList, View, TouchableOpacity } from 'react-native';


export default function Home(){
    const DATA = [
        {key: 1, data: ['$5,000', '12-7-2020', 'Active']},
        {key: 2, data: ['$6,000', '16-7-2020', 'Closed']},
        {key: 3, data: ['$5,000', '12-7-2020', 'Active']},
        { key: 4, data: ['$6,000', '16-7-2020', 'Closed'] },
        { key: 5, data: ['$5,000', '12-7-2020', 'Active'] },
        { key: 6, data: ['$5,000', '12-7-2020', 'Active'] },
        { key: 7, data: ['$6,000', '16-7-2020', 'Closed'] },
        
    ];
    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.homeScrollView}>
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
                    <View style={styles.getLoanBox}>
                        <Text style={styles.getLoanText}>Get loans for as low as <Text style={{fontWeight: 'bold'}}>20%</Text> interest rate</Text>
                        <TouchableOpacity style={styles.getLoanButton}>
                            <Text style={styles.getLoanButtonText}>GET LOAN</Text>
                        </TouchableOpacity>
                    </View>
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
            <View style={styles.footer}>
                <TouchableOpacity style={styles.iconBox}>
                    <Image style={styles.iconHome} source={require('../assets/home.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBox}>
                    <Image style={styles.iconMessage} source={require('../assets/envelope2.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBox}>
                    <Image style={styles.iconCard} source={require('../assets/credit-card2.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBox}>
                    <Image style={styles.iconMore} source={require('../assets/more2.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

function List({data}){ 
    if (data.length > 0){
        return (
            <FlatList
                data={data}
                keyExtractor={(index) => 'item' + index.key}
                renderItem={({ item }) => <Item data={item.data} />}
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