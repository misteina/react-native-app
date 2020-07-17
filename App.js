import 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import GetStarted from './pages/getstarted';
import SendVerificationCode from './pages/send-code';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import PersonalDetails from './pages/personal-details';
import LoanProcedure from './pages/loan-procedure';
import RepayLoan from './pages/loan-repayment';
import Employment from './pages/employment';
import LoanApplication from './pages/loan-application';
import AccountDetails from './pages/account-details';
import CardDetails from './pages/card-details';
import About from './pages/about';
import Menu from './pages/menu';
import ContactUs from './pages/contact';


const Stack = createStackNavigator();

export default function App() {
    let initialScreen = 'Blank';
    let showHeader = 'none';
    
    const [userStatus, setUserStatus] = React.useState(null);

    AsyncStorage.getItem('USER_STATUS').then(value => setUserStatus(value));
        
    const Theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            card: 'rgb(166, 28, 28)',
            text: 'rgb(255, 255, 255)',
            border: 'rgb(148, 8, 8)'
        },
    };

    if (userStatus === null){
        initialScreen = "Get Started";
        showHeader = "none";
    } else {
        initialScreen = "Login";
        showHeader = "screen";
    }

    return (
        <NavigationContainer theme={Theme}>
            <Stack.Navigator initialRouteName="Loan Repayment" headerMode="float">
                <Stack.Screen name="Blank" component={Blank} />
                <Stack.Screen name="Get Started" component={GetStarted} />
                <Stack.Screen name="Verification Code" component={SendVerificationCode} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Personal Details" component={PersonalDetails} />
                <Stack.Screen name="Loan Procedure" component={LoanProcedure} />
                <Stack.Screen name="Loan Repayment" component={RepayLoan} />
                <Stack.Screen name="Employment" component={Employment} />
                <Stack.Screen name="Loan Application" component={LoanApplication} />
                <Stack.Screen name="Account Details" component={AccountDetails} />
                <Stack.Screen name="Card Details" component={CardDetails} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Contact Us" component={ContactUs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Blank(){
    return null
}