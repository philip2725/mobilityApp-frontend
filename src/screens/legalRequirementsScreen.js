import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LargeButton } from '../components/button';
import { Fonts, Spacing, Colors } from '../config';
import CustomSwitch from '../components/switch';


function LegalRequirementsScreen(props) {
    return (
        <View style={{ flex: 1, padding: 20 }}>

            <View style={styles.container}>

                <Text style={[Fonts.header, styles.headline]}>Rechtliche Anforderungen</Text>
                

                <Text style={[Fonts.body, styles.legalText]}>Ich stimme den Nutzungsbedinungen von mymobilityconnexxion zu</Text>

                <CustomSwitch style={{alignItems: "flex-end", marginBottom: Spacing.s}} />

                <Text style={[Fonts.body, styles.legalText]}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>

                <CustomSwitch style={{alignItems: "flex-end"}} />


            </View>

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
        marginBottom: Spacing.l
    },
    subline: {
        textAlign: "center",
        marginBottom: Spacing.l
    },
    legalText: {
        marginBottom: Spacing.s
    }

});

export default LegalRequirementsScreen;