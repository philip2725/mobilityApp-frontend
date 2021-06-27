import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PlainButton, LargeButton } from '../components/button';
import { Fonts, Spacing, Colors } from '../config';
import CustomSlider from '../components/slider';

function TravelPreferencesScreen(props) {
    return (
        <View style={{ flex: 1, padding: 20 }}>

            <View style={styles.container}>

                <Text style={[Fonts.header, styles.headline]}>Deine Reisepräferenzen</Text>
                <Text style={[Fonts.body, styles.subline]}>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam.</Text>

                <CustomSlider title="Kostengünstig"/>
                <CustomSlider title="Schnell"/>
                <CustomSlider title="Nachhaltig"/>
                <CustomSlider title="Komfortabel"/>
                <CustomSlider title="Sportlich"/>

            </View>

            <PlainButton title="zurücksetzen" />
            <LargeButton title="weiter" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headline: {
        textAlign: "center",
        marginBottom: Spacing.s
    },
    subline: {
        textAlign: "center",
        marginBottom: Spacing.l
    }

});

export default TravelPreferencesScreen;