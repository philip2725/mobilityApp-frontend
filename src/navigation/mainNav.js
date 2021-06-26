import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverScreen from "../screens/discoverScreen";
import TicketScreen from "../screens/ticketScreen";
import AccountScreen from "../screens/accountScreen";
import DetailScreen from '../screens/detailScreen';
import SetLocationScreen from '../screens/setLocationScreen';

const LaunchStack = createStackNavigator();

function LaunchStackScreen() {
    return (
        <LaunchStack.Navigator mode="modal" headerMode="none">
            <LaunchStack.Screen name="Entdecken" component={DiscoverStackScreen} />
            <LaunchStack.Screen name="MyModal" component={SetLocationScreen} />
        </LaunchStack.Navigator>
    );
}

const DiscoverStack = createStackNavigator();

function DiscoverStackScreen() {
    return (
        <DiscoverStack.Navigator screenOptions={{ headerShown: false }}>
            <DiscoverStack.Screen name="Entdecken" component={DiscoverScreen} />
            <DiscoverStack.Screen name="Details" component={DetailScreen} />
        </DiscoverStack.Navigator>
    );
}


const TicketStack = createStackNavigator();

function TicketStackScreen() {
    return (
        <TicketStack.Navigator>
            <TicketStack.Screen name="Tickets" component={TicketScreen} />
            <DiscoverStack.Screen name="Details" component={DetailScreen} />
        </TicketStack.Navigator>
    );
}


const AccountStack = createStackNavigator();

function AccountStackScreen() {
    return (
        <AccountStack.Navigator>
            <AccountStack.Screen name="Account" component={AccountScreen} />
            <DiscoverStack.Screen name="Details" component={DetailScreen} />
        </AccountStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function MainNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Entdecken" component={LaunchStackScreen} />
            <Tab.Screen name="Tickets" component={TicketStackScreen} />
            <Tab.Screen name="Account" component={AccountStackScreen} />
        </Tab.Navigator>
    );
}