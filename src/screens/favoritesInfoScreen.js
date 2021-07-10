import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LargeButton , RowButton } from '../components/button';
import { Fonts, Spacing, Colors } from '../config';
import {register} from '../services/authentication';


function FavoritesInfoScreen() {


    async function handleFavorites() {
        let userCredential = await register('1@1.com','123456');
        console.log("User is registered: " + userCredential.user.uid);
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>

            <View style={styles.container}>

                <Text style={[Fonts.header, styles.headline]}>Festlegung der Favoriten</Text>
                <Text style={[Fonts.body, styles.subline]}>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam.</Text>

                <RowButton title="Zuhause hinzufügen" />
                <RowButton title="Arbeit hinzufügen" />


            </View>

            <LargeButton title="weiter" onPress={handleFavorites}/>

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