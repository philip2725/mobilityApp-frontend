import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PlainButton, LargeButton } from '../components/button';
import CustomTextInput from '../components/textinput';
import { Fonts, Spacing, Colors } from '../config';

function RegisterScreen({ navigation }) {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={styles.container}>
                <Text style={[styles.headline, Fonts.header]}>Registriere dich auf der Plattform!</Text>
                <CustomTextInput placeholder="Deine Vorname" style={{ marginBottom: Spacing.l }} />
                <CustomTextInput placeholder="Deine Nachname" style={{ marginBottom: Spacing.l }} />
                <CustomTextInput placeholder="Deine Email-Adresse" style={{ marginBottom: Spacing.l }} />
                <CustomTextInput placeholder="Dein Passwort" style={{marginBottom: Spacing.l}}/>

                <Text style={[styles.socialText, Fonts.body]}>oder melde dich mit Social Media an</Text>

                <View style={styles.socialContainer}>

                    <View style={styles.iconContainer}></View>

                    <View style={styles.iconContainer}></View>

                    <View style={styles.iconContainer}></View>

                </View>

            </View>

            <LargeButton title="Registrieren" onPress={() => navigation.navigate('Verkehrsmittel') }/>

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