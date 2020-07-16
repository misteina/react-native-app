import React, { useState } from 'react';
import styles from '../styles';
import { View, Image, TouchableOpacity } from 'react-native';



export default function MenuBar({icon}){
    let homeIcon = require('../assets/home2.png');
    let messageIcon = require('../assets/envelope2.png');
    let cardIcon = require('../assets/credit-card2.png');
    let moreIcon = require('../assets/more2.png');

    if (icon === 'home'){
        homeIcon = require('../assets/home.png');
    } else if (icon === 'message'){
        messageIcon = require('../assets/envelope.png');
    } else if (icon === 'pay'){
        cardIcon = require('../assets/credit-card.png');
    } else {
        moreIcon = require('../assets/more.png');
    }
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.iconBox}>
                <Image style={styles.iconHome} source={homeIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}>
                <Image style={styles.iconMessage} source={messageIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}>
                <Image style={styles.iconCard} source={cardIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}>
                <Image style={styles.iconMore} source={moreIcon} />
            </TouchableOpacity>
        </View>
    )
}