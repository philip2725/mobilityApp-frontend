import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainNav from './mainNav';
import AuthenticationNav from './authenticationNav';
import { useSelector } from 'react-redux';

export default function RootNav() {

    const isSignedIn = useSelector((state) => state.user.isSignedIn)
    const skipLogin = useSelector((state) => state.user.skipLogin)

    return (
        <NavigationContainer>
            {isSignedIn || skipLogin ? <MainNav /> : <AuthenticationNav />}
        </NavigationContainer>
    );
}