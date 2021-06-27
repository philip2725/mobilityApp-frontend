import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LaunchScreen from '../screens/launchScreen';
import RegisterScreen from '../screens/registerScreen';
import LoginScreen from '../screens/loginScreen';
import TravelPreferencesScreen from '../screens/travelPreferencesScreen';
import TransportScreen from '../screens/transportScreen';
import FavoritesInfoScreen from '../screens/favoritesInfoScreen';
import AllowLocationServiceScreen from '../screens/allowLocationServiceScreen';
import AllowPushNotificationsScreen from '../screens/allowPushNotificationsScreen';
import LegalRequirementsScreen from '../screens/legalRequirementsScreen';

const AuthenticationStack = createStackNavigator();

export default function AuthenticationNav() {
    return (
        <AuthenticationStack.Navigator>
            <AuthenticationStack.Screen name="Launch" component={LaunchScreen} />
            <AuthenticationStack.Screen name="Anmelden" component={LoginScreen} />
            <AuthenticationStack.Screen name="Registrieren" component={RegisterScreen} />
            <AuthenticationStack.Screen name="Reisepräferenzen" component={TravelPreferencesScreen} />
            <AuthenticationStack.Screen name="Verkehrsmittel" component={TransportScreen} />
            <AuthenticationStack.Screen name="Favoriten" component={FavoritesInfoScreen} />
            <AuthenticationStack.Screen name="Location Service" component={AllowLocationServiceScreen} />
            <AuthenticationStack.Screen name="Push-Notifications" component={AllowPushNotificationsScreen} />
            <AuthenticationStack.Screen name="Rechtliche Anforderungen" component={LegalRequirementsScreen} />
        </AuthenticationStack.Navigator>
    );
}