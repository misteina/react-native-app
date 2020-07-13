import React, { useState } from 'react';
import styles from '../styles';
import { Text, Image, ScrollView, FlatList, View } from 'react-native';


export default function Home(){
    const DATA = [];
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
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
                <View>
                    <Text>More...</Text><Text>Hide</Text>
                </View>
            </ScrollView>
        </View>
    );
}