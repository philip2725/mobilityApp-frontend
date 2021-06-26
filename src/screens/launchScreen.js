import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LargeButton, PlainButton } from '../components/button';
import { useDispatch } from 'react-redux';
import { skipLogin } from '../redux/reducers/userSlice';

function LaunchScreen({ navigation }) {

    const dispatch = useDispatch()

    return (
        <View style={{ flex: 1, padding: 20 }}>

            <View style={styles.container}>

            </View>

            <LargeButton title="Anmelden" border={true} onPress={() => navigation.navigate('Anmelden')} />

            <LargeButton title="Registrieren" onPress={() => navigation.navigate('Registrieren')} />

            <PlainButton title="Fortfahren ohne Anmeldung" onPress={() => dispatch(skipLogin())}/>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});


export default LaunchScreen;