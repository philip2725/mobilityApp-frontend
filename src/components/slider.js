import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Colors, Spacing, Fonts } from '../config';

function CustomSlider(props) {
    return (

        <View style={[styles.container,props.style]}>
            {/*https://js.coach/package/@react-native-community/slider*/}
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor={Colors.primary}
                maximumTrackTintColor={Colors.gray_light}
                onSlidingComplete={props.onSlidingComplete}
                value={0.5}
            />
            <View style={styles.sublineContainer}>
                <Text style={Fonts.body}>nicht wichtig</Text>
                <Text style={Fonts.body}>{props.title}</Text>
                <Text style={Fonts.body}>sehr wichtig</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: Spacing.xl,
    },
    slider: {
        height: 40
    },
    sublineContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});

export default CustomSlider;