import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Slider } from 'react-native-elements';
import { Colors, Spacing, Fonts } from '../config';

function CustomSlider(props) {
    return (

        <View style={[styles.container, props.style]}>
         
            <Slider
                value={0.5}
                onValueChange={props.onValueChange}
                maximumTrackTintColor={Colors.gray_light}
                minimumTrackTintColor={Colors.primary}
                thumbTintColor={Colors.primary}
                thumbStyle={styles.thumb}
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
    sublineContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    thumb: {
        width: 30,
        height: 30
    }
});

export default CustomSlider;