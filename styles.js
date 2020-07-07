import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    bgimg: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(166, 28, 28, 0.75)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shape: {
        position: 'absolute',
        width: '100%',
        height: '20%',
        top: 0,
        left: 0,
        resizeMode: 'stretch'
    },
    logo: {
        height: '15%',
        marginBottom: '5%',
        resizeMode: 'center'
    },
    getLoans: {
        fontSize: 20,
        color: '#a61c1c',
        marginBottom: '2%',
        textShadowColor: 'white',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 8,
        fontWeight: 'bold'
    },
    intro: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginLeft: '5%',
        marginRight: '5%'
    },
    button: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        backgroundColor: '#a61c1c',
        borderRadius: 4,
        elevation: 4
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 15
    },
    sendCode: {
        width: '100%',
        height: '100%',
        minHeight: 500,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dbdbdb'
    },
    bgLogo: {
        //width: '50%',
        height: '20%',
        position: 'absolute',
        top: '10%',
        resizeMode: 'center'
    },
    welcome: {
        fontSize: 20,
        color: '#a61c1c',
        fontWeight: 'bold'
    },
    words: {
        fontSize: 15,
        fontWeight:'bold',
    },
    details: {
        marginTop: '5%',
        width: '85%',
        height: 50,
        color: 'grey',
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
        borderColor: '#a61c1c'
    }
});