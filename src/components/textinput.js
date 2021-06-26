import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Colors, Spacing, Fonts } from '../config';

function CustomTextInput(props) {
    return (
        <TextInput
            style={[styles.input, Fonts.body, props.style]}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        marginBottom: Spacing.s,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.gray_medium,
        color: Colors.black
    },
});

export default CustomTextInput;