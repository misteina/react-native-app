import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import * as Components from './pages';
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
                <Stack.Screen name="GetStarted" component={Components.GetStarted} />
                <Stack.Screen name="Register" component={Components.Register} />
                <Stack.Screen name="Login" component={Components.Login} />
                <Stack.Screen name="Home" component={Components.Home} />
                <Stack.Screen name="Profile" component={Components.Profile} />
                <Stack.Screen name="Procedure" component={Components.Procedure} />
                <Stack.Screen name="Calculator" component={Components.Calculator} />
                <Stack.Screen name="Employment" component={Components.Employment} />
                <Stack.Screen name="LoanApplication" component={Components.LoanApplication} />
                <Stack.Screen name="AccountDetails" component={Components.AccountDetails} />
                <Stack.Screen name="CardDetails" component={Components.CardDetails} />
                <Stack.Screen name="About" component={Components.About} />
                <Stack.Screen name="ContactUs" component={Components.ContactUs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}