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
        width: '85%',
        backgroundColor: '#a61c1c',
        borderRadius: 4,
        elevation: 4
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 15,
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
    textInput: {
        marginTop: '5%',
        width: '85%',
        height: '8%',
        maxHeight: 50,
        minHeight: 45,
        color: 'grey',
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
        borderColor: '#a61c1c',
        backgroundColor: '#dbdbdb'
    },
    view: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    bgimg2: {
        height: '20%',
        minHeight: 100,
        marginTop: '10%',
        marginBottom: '5%',
        resizeMode: 'center'
    },
    scrollView: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: '30%'
    },
    welcomeBack: {
        color: '#a61c1c',
        marginTop: '8%',
        fontSize: 25,
        fontWeight: 'bold'
    },
    forgotPassword: {
        fontSize: 15,
        marginTop: 10
    },
    helloUser: {
        width: '90%',
        flexDirection: 'row',
        marginTop: '2%',
        marginBottom: '1%'
    },
    hello: {
        fontSize: 30,
        color: '#ed9a9a',
        //textShadowColor: 'grey',
        //textShadowRadius: 4,
        //textShadowOffset: { width: 0, height: 1 }
    },
    name: {
        color: '#a61c1c',
        fontSize: 30,
        fontWeight: 'bold'
    },
    activeLoan: {
        width: '95%',
        alignItems: 'center',
        borderRadius: 6,
        marginBottom: '2%',
        paddingVertical: '10%',
        backgroundColor: 'rgba(166, 28, 28, 0.60)'
    },
    activeLoanText: {
        color: '#ffe3e0',
        fontSize: 20,
        fontWeight: 'bold'
    },
    activeLoanAmount: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        zIndex: 1
    },
    activeLoanDate: {
        color: 'white',
        zIndex: 1
    },
    waveCase: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%'
    },
    wave: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        bottom: 0,
        resizeMode: 'stretch'
    },
    wave2: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        bottom: 0,
        resizeMode: 'stretch'
    },
    getLoans: {
        width: '95%',
        height: '40%',
        borderRadius: 6,
        marginBottom: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(166, 28, 28, 0.60)'
    },
    getLoanPic: {
        //width: '50%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        //flexDirection: 'row',
        flex: 1,
        resizeMode: 'contain'
    },
    getLoanText: {
        flex: 1,
        color: 'white',
        fontSize: 20
    },
    loanHistory: {
        width: '95%',
        borderRadius: 6,
        backgroundColor: 'rgba(166, 28, 28, 0.20)'
    },
    loanHistoryTitle: {
        width: '100%',
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        paddingVertical: 8,
        backgroundColor: '#a61c1c'
    },
    noHistory: {
        color: '#c98b8b',
        marginVertical: 20
    },
    historyHeading: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 5,
        backgroundColor: '#e3c1c1'
    },
    headingText: {
        flex: 1,
        color: '#a84848',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    historyItem: {
        width: '100%',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#cc8989',
        paddingVertical: 5,
    },
    historyData: {
        flex: 1,
        color: '#a84848',
        textAlign: 'center',
    }
});