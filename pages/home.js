import React, { useState } from 'react';
import styles from '../styles';
import { Text, Image, ScrollView, FlatList, View } from 'react-native';


export default function Home(){
    const DATA = [];
    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text>Hello</Text><Text>, Andrew</Text>
                <View>
                    <Text>Active Loan</Text>
                    <Text>$2,5000</Text>
                    <Text>04/07</Text>
                    <Image source={require('../assets/bg1.svg')} />
                    <Image source={require('../assets/bg2.svg')} />
                </View>
                <View>
                    <Image source={require('../assets/img.svg')} />
                    <Text>Get loans for as low as 20%</Text>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
                <Text>More...</Text>
                <Text>Hide</Text>
            </ScrollView>
        </View>
    );
}