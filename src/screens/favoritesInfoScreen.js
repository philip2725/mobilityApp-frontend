import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LargeButton , RowButton } from '../components/button';
import { Fonts, Spacing, Colors } from '../config';


function FavoritesInfoScreen(props) {
    return (
        <View style={{ flex: 1, padding: 20 }}>

            <View style={styles.container}>

                <Text style={[Fonts.header, styles.headline]}>Festlegung der Favoriten</Text>
                <Text style={[Fonts.body, styles.subline]}>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam.</Text>

                <RowButton title="Zuhause hinzufügen" />
                <RowButton title="Arbeit hinzufügen" />


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
        marginBottom: Spacing.s
    },
    subline: {
        textAlign: "center",
        marginBottom: Spacing.l
    }

});

export default FavoritesInfoScreen;