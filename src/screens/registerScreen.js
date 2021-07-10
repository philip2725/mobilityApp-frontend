import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LargeButton } from '../components/button';
import CustomTextInput from '../components/textinput';
import { Fonts, Spacing, Colors } from '../config';
import { updateUser } from '../redux/reducers/userSlice';
import { useDispatch } from 'react-redux';
import { register } from '../services/authentication';

function RegisterScreen({ navigation }) {

    const [firstName, setFirstName] = useState(null);
    const [lastname, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)

    const dispatch = useDispatch();

    function handleRegister() {
        if (firstName && lastname && email && password) {
            register(email, password).then((userCredential) => {
                console.log("User is registered: " + userCredential.user.uid);
                dispatch(updateUser({ firstName, lastname }))
                navigation.navigate('Rechtliche Anforderungen')
            })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            console.log("You have to fill all input fields")
        }

    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={styles.container}>
                <Text style={[styles.headline, Fonts.header]}>Registriere dich auf der Plattform!</Text>
                <CustomTextInput placeholder="Deine Vorname" style={{ marginBottom: Spacing.l }} onChangeText={setFirstName} value={firstName} />
                <CustomTextInput placeholder="Deine Nachname" style={{ marginBottom: Spacing.l }} onChangeText={setLastName} value={lastname} />
                <CustomTextInput placeholder="Deine Email-Adresse" style={{ marginBottom: Spacing.l }} onChangeText={setEmail} value={email} />
                <CustomTextInput placeholder="Dein Passwort" style={{ marginBottom: Spacing.l }} onChangeText={setPassword} value={password} />

                <Text style={[styles.socialText, Fonts.body]}>oder melde dich mit Social Media an</Text>

                <View style={styles.socialContainer}>

                    <View style={styles.iconContainer}></View>

                    <View style={styles.iconContainer}></View>

                    <View style={styles.iconContainer}></View>

                </View>

            </View>

            <LargeButton title="Registrieren" onPress={handleRegister} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headline: {
        marginTop: Spacing.xl,
        marginBottom: Spacing.xl
    },
    socialText: {
        textTransform: "uppercase",
        marginBottom: Spacing.l,
        alignSelf: "center"
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    iconContainer: {
        height: 60,
        width: 60,
        backgroundColor: Colors.gray_light,
        borderRadius: 5,

    }
});

export default RegisterScreen;