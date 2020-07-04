import 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import GetStarted from './pages/about';
import SendVerificationCode from './pages/send-code';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import PersonalDetails from './pages/personal-details';
import LoanProcedure from './pages/loan-procedure';
import LoanRepayment from './pages/loan-repayment';
import Employment from './pages/employment';
import LoanApplication from './pages/loan-application';
import AccountDetails from './pages/account-details';
import CardDetails from './pages/card-details';
import About from './pages/about';
import ContactUs from './pages/contact';


const Stack = createStackNavigator();

export default function App() {
    const userStatus = (async () => await AsyncStorage.getItem('status'))();

    const Theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            card: 'rgb(166, 28, 28)',
            text: 'rgb(255, 255, 255)',
            border: 'rgb(148, 8, 8)'
        },
    };

    let initialScreen;
    if (userStatus === null) {
        initialScreen = "Get Started";
    } else if (userStatus === "registered") {
        initialScreen = "Login";
    } else {
        initialScreen = "Register";
    }

    return (
        <NavigationContainer theme={Theme}>
            <Stack.Navigator initialRouteName={initialScreen}>
                <Stack.Screen name="Get Started" component={GetStarted} />
                <Stack.Screen name="Send Verification Code" component={SendVerificationCode} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Personal Details" component={PersonalDetails} />
                <Stack.Screen name="Procedure" component={LoanProcedure} />
                <Stack.Screen name="Loan Repayment" component={LoanRepayment} />
                <Stack.Screen name="Employment" component={Employment} />
                <Stack.Screen name="Loan Application" component={LoanApplication} />
                <Stack.Screen name="Account Details" component={AccountDetails} />
                <Stack.Screen name="Card Details" component={CardDetails} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Contact Us" component={ContactUs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}