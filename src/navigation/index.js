import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainNav from './mainNav';
import AuthenticationNav from './authenticationNav';

export default function RootNav() {

    const isSignedIn = false;

    return (
        <NavigationContainer>
            {isSignedIn ? <MainNav /> : <AuthenticationNav />}
        </NavigationContainer>
    );
}