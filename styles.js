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
    buttonStatic: {
        position:'absolute',
        bottom: 20,
        marginTop: 0
    },
    buttonLoose: {
        width: '85%',
        marginTop: '5%',
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
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
        borderColor: '#a61c1c'
    },
    view: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    menuView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#7a0d0d'
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
        paddingBottom: '20%'
    },
    menuScrollView: {
        width: '100%',
        alignItems: 'center',
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
        paddingVertical: 20,
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
        maxHeight: 150,
        borderRadius: 6,
        marginBottom: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(166, 28, 28, 0.60)'
    },
    getLoanPic: {
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        resizeMode: 'contain'
    },
    getLoanBox: {
        flex: 1,
        paddingVertical: 20,
    },
    getLoanText: {
        flex: 1,
        color: 'white',
        fontSize: 18
    },
    getLoanButton: {
        width: '60%',
        maxWidth: 120,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'white'
    },
    getLoanButtonText: {
        color: 'white',
        width: '100%',
        paddingVertical: 10,
        textAlign: 'center',
        fontWeight: 'bold'
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
    },
    footer: {
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#a61c1c'
    },
    homeScrollView: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 150
    },
    iconBox: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconHome: {
        width: '55%',
        height: '55%',
        resizeMode: 'center'
    },
    iconMessage: {
        width: '60%',
        height: '60%',
        resizeMode: 'center'
    },
    iconCard: {
        width: '70%',
        height: '70%',
        resizeMode: 'center'
    },
    iconMore: {
        width: '60%',
        height: '60%',
        resizeMode: 'center'
    },
    details: {
        width: '95%',
        height: '8%',
        fontSize: 20,
        color: '#363030',
        fontWeight: 'bold',
        paddingLeft: 10,
        marginBottom: '5%',
        borderBottomWidth: 1,
        borderBottomColor: '#a61c1c'
    },
    fieldTitle: {
        width: '95%',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#a61c1c'
    },
    procedureText: {
        width: '95%',
        marginTop: '10%',
        fontSize: 20,
        textAlign: 'center',
        color: '#a61c1c'
    },
    repay: {
        width:'95%',
        height: '30%',
        flexDirection: 'row',
    },
    repayText: {
        flex: 1,
        color: '#2e2e2d',
        fontWeight: 'bold',
        fontSize: 20,
        borderBottomWidth: 1,
        textAlignVertical: 'bottom',
        borderBottomColor: '#d9d9d9'
    },
    repayFigure: {
        color: '#a61c1c',
        textAlign: 'right'
    },
    pickerBox: {
        marginTop: '10%',
        width: '85%',
        height: '8%',
        maxHeight: 50,
        minHeight: 45,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#a61c1c'
    },
    picker: {
        width: '100%',
        height: '100%',
        maxHeight: 50,
        minHeight: 45
    },
    loanSummary: {
        width: '95%',
        marginTop: '5%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#a61c1c'
    },
    loanSummaryTitle: {
        width: '100%',
        fontSize: 18,
        color: '#a61c1c',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5
    },
    summaryHeading: {
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#a61c1c'
    },
    summaryText: {
        flex: 1,
        color: '#121212',
        fontWeight: 'bold',
        paddingVertical: 5,
        textAlign: 'center'
    },
    summaryItem: {
        width: '100%',
        flexDirection: 'row'
    },
    summaryData: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 5,
        textAlign: 'center'
    },
    expand: {
        width: '95%'
    },
    loanDuration: {
        width: '100%',
        fontSize: 18,
        color: '#a61c1c',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5
    },
    dateBox: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dateInput: {
        width: '30%',
        marginTop: 0
    },
    middleBorder: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderRightColor: '#a61c1c',
        borderLeftColor: '#a61c1c'
    }
});