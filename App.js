import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import * as Pages from './pages';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    const [userStatus, setUserStatus] = useState(async () => await AsyncStorage.getItem('status'));

    let initialScreen;
    if (userStatus === null) {
        initialScreen = "GetStarted";
    } else if (userStatus === "registered") {
        initialScreen = "Login";
    } else {
        initialScreen = "Register";
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialScreen}>
                <Stack.Screen name="GetStarted" component={Pages.GetStarted} />
                <Stack.Screen name="Register" component={Pages.SendVerificationCode} />
                <Stack.Screen name="Register" component={Pages.Register} />
                <Stack.Screen name="Login" component={Pages.Login} />
                <Stack.Screen name="Home" component={Pages.Home} />
                <Stack.Screen name="Profile" component={Pages.PersonalDetails} />
                <Stack.Screen name="Procedure" component={Pages.LoanProcedure} />
                <Stack.Screen name="Calculator" component={Pages.Calculator} />
                <Stack.Screen name="Employment" component={Pages.Employment} />
                <Stack.Screen name="LoanApplication" component={Pages.LoanApplication} />
                <Stack.Screen name="AccountDetails" component={Pages.AccountDetails} />
                <Stack.Screen name="CardDetails" component={Pages.CardDetails} />
                <Stack.Screen name="About" component={Pages.About} />
                <Stack.Screen name="ContactUs" component={Pages.ContactUs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}