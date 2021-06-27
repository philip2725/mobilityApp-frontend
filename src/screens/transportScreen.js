import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PlainButton, LargeButton } from '../components/button';
import { Fonts, Spacing, Colors } from '../config';
import CustomCheckbox from '../components/checkbox';

function TransportScreen(props) {
    return (
        <View style={{ flex: 1, padding: 20 }}>

            <View style={styles.container}>

                <Text style={[Fonts.header, styles.headline]}>Wähle Verkehrsmittel</Text>
                <Text style={[Fonts.body, styles.subline]}>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam.</Text>

                <CustomCheckbox title="Car Sharing" checked={true}/>
                <CustomCheckbox title="Ride Sharing" checked={true}/>
                <CustomCheckbox title="Taxi Sharing" checked={true}/>
                <CustomCheckbox title="ÖPNV" checked={true}/>
                <CustomCheckbox title="Fahrrad" checked={true}/>
                <CustomCheckbox title="E-Scooter" checked={true}/>
                <CustomCheckbox title="zu Fuß" checked={true}/>
                <CustomCheckbox title="Eigenes Auto" checked={false}/>


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

export default TransportScreen;