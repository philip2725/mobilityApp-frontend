import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PlainButton, LargeButton } from '../components/button';
import { Fonts, Spacing, Colors } from '../config';
import CustomCheckbox from '../components/checkbox';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/reducers/userSlice';

function TransportScreen({navigation}) {

    const [carSharing, setCarSharing] = useState(true);
    const [rideSharing, setRideSharing] = useState(true);
    const [taxiSharing, setTaxiSharing] = useState(true);
    const [öpnv, setÖpnv] = useState(true);
    const [bicycle, setBicycle] = useState(true);
    const [scooter, setScooter] = useState(true);
    const [walk, setWalk] = useState(true);
    const [car, setCar] = useState(true);

    const dispatch = useDispatch();

    function handleReset() {
        setCarSharing(true)
        setRideSharing(true)
        setTaxiSharing(true)
        setÖpnv(true)
        setBicycle(true)
        setScooter(true)
        setWalk(true)
        setCar(true)
    }

    function handleTransport() {
        dispatch(updateUser({transportModes: {carSharing,rideSharing,taxiSharing,öpnv,bicycle,scooter,walk,car}}))
        navigation.navigate('Favoriten');
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>

            <View style={styles.container}>

                <Text style={[Fonts.header, styles.headline]}>Wähle Verkehrsmittel</Text>
                <Text style={[Fonts.body, styles.subline]}>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam.</Text>

                <CustomCheckbox title="Car Sharing" checked={carSharing} onIconPress={() => setCarSharing(prevState => !prevState)} />
                <CustomCheckbox title="Ride Sharing" checked={rideSharing} onIconPress={() => setRideSharing(prevState => !prevState)}/>
                <CustomCheckbox title="Taxi Sharing" checked={taxiSharing} onIconPress={() => setTaxiSharing(prevState => !prevState)}/>
                <CustomCheckbox title="ÖPNV" checked={öpnv} onIconPress={() => setÖpnv(prevState => !prevState)}/>
                <CustomCheckbox title="Fahrrad" checked={bicycle} onIconPress={() => setBicycle(prevState => !prevState)}/>
                <CustomCheckbox title="E-Scooter" checked={scooter} onIconPress={() => setScooter(prevState => !prevState)}/>
                <CustomCheckbox title="zu Fuß" checked={walk} onIconPress={() => setWalk(prevState => !prevState)}/>
                <CustomCheckbox title="Eigenes Auto" checked={car} onIconPress={() => setCar(prevState => !prevState)}/>


            </View>

            <PlainButton title="zurücksetzen" onPress={handleReset}/>
            <LargeButton title="weiter" onPress={handleTransport} />

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