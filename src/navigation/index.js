import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainNav from './mainNav';
import AuthenticationNav from './authenticationNav';
import { useSelector, useDispatch } from 'react-redux';
import firebase from '../config/firebase';
import { updateAuthStatus } from '../redux/reducers/userSlice';

export default function RootNav() {

    const isSignedIn = useSelector((state) => state.user.isSignedIn)
    const skipLogin = useSelector((state) => state.user.skipLogin)

  

    const dispatch = useDispatch();

    useEffect(() => {

        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                // ...
                //dispatch updateUser
                console.log("User is logged in")
                dispatch(updateAuthStatus(true))
            } else {
                // User is signed out
                // ...
                console.log("User is logged out")
                
                //dispatch logout user
            }
        });

        return () => unsubscribe()

    }, [])


    return (
        <NavigationContainer>
            {isSignedIn && skipLogin ? <MainNav /> : <AuthenticationNav />}
        </NavigationContainer>
    );
}