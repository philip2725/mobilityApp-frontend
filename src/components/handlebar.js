import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Colors, Spacing, Fonts } from '../config';

function HandleBar(props) {
    return (

        <View style={[styles.container, props.style]}>
            <View style={styles.handle}></View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center"
    },
    handle: {
        width: 30,
        height: 5,
        borderRadius: 10,
        backgroundColor: Colors.gray_medium,
        marginBottom: Spacing.s,
        marginTop: Spacing.s
    }
   
});

export default HandleBar;