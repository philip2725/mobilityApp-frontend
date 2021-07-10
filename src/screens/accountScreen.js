import React from 'react';
import { Button, View, Text } from 'react-native';
import {logout} from '../services/authentication';
import { useDispatch } from 'react-redux';
import {skipLogin, updateAuthStatus} from '../redux/reducers/userSlice';

function AccountScreen({ navigation }) {

    const dispatch = useDispatch()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Account screen</Text>
            <Button
                title="Logout"
                onPress={() => logout().then(() => {dispatch(skipLogin(false)); dispatch(updateAuthStatus(false))} )}
            />
        </View>
    );
}

export default AccountScreen;