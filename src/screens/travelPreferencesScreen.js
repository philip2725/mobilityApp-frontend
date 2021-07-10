import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PlainButton, LargeButton } from '../components/button';
import { Fonts, Spacing, Colors } from '../config';
import CustomSlider from '../components/slider';

function TravelPreferencesScreen({navigation}) {

    const [costEffective, setCostEffective] = useState(5);
    const [fast, setFast] = useState(5);
    const [sustainable, setSustainable] = useState(5);
    const [comfortable, setComfortable] = useState(5);
    const [sporty, setSporty] = useState(5);

    function handleReset() {
        setCostEffective(5)
        setFast(5)
        setSustainable(5)
        setComfortable(5)
        setSporty(5)
    }

    function handleTravelPreferences() {
        navigation.navigate('Verkehrsmittel')
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>

            <View style={styles.container}>

                <Text style={[Fonts.header, styles.headline]}>Deine Reisepräferenzen</Text>
                <Text style={[Fonts.body, styles.subline]}>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam.</Text>

                <CustomSlider title="Kostengünstig" value={costEffective} onValueChange={(value) => setCostEffective(value)}/>
                <CustomSlider title="Schnell" value={fast} onValueChange={(value) => setFast(value)}/>
                <CustomSlider title="Nachhaltig"value={sustainable} onValueChange={(value) => setSustainable(value)}/>
                <CustomSlider title="Komfortabel" value={comfortable} onValueChange={(value) => setComfortable(value)}/>
                <CustomSlider title="Sportlich" value={sporty} onValueChange={(value) => setSporty(value)}/>

            </View>

            <PlainButton title="zurücksetzen" onPress={handleReset}/>
            <LargeButton title="weiter" onPress={handleTravelPreferences}/>

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