import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors, Fonts, Spacing } from "../config";


export function LargeButton(props) {

    return (
        <TouchableOpacity
            style={[props.border ? styles.borderButton : styles.borderlessButton, props.style]}
        onPress={props.onPress}
        >
            <Text style={[Fonts.button.large, {
                color: props.border ? Colors.primary : Colors.white
            }]}
            >{props.title}</Text>
        </TouchableOpacity>
    );
}


export function MediumButton(props) {


    return (
        <TouchableOpacity
            style={[props.border ? styles.borderButton : styles.borderlessButton, props.style]}
            onPress={props.onPress}
        >
            <Text style={[Fonts.button.medium, {
                color: props.border ? Colors.primary : Colors.white
            }]}
            >{props.title}</Text>
        </TouchableOpacity>
    );
}


export function SmallButton(props) {

    return (
        <TouchableOpacity
            style={[props.border ? styles.borderButton : styles.borderlessButton, props.style]}
            onPress={props.onPress}
        >
            <Text style={[Fonts.button.small, {
                color: props.border ? Colors.primary : Colors.white
            }]}
            >{props.title}</Text>
        </TouchableOpacity>
    );
}

export function PlainButton(props) {

    return (
        <TouchableOpacity
            style={[styles.plainButton, props.style]}
            onPress={props.onPress}
        >
            <Text style={[Fonts.button.small, {
                color: Colors.primary
            }]}
            >{props.title}</Text>
        </TouchableOpacity>
    );
}

export function RowButton(props) {

    return (
        <TouchableOpacity
            style={[styles.plainButton, props.style]}
            onPress={props.onPress}
        >
            <Text style={[Fonts.button.small, {
                color: Colors.primary
            }]}
            >{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    borderlessButton: {
        alignItems: "center",
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        marginBottom: Spacing.s
    },
    borderButton: {
        alignItems: "center",
        backgroundColor: Colors.white,
        padding: 10,
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: Spacing.s
    },
    plainButton: {
        alignItems: "center",
        padding: 10,
        marginBottom: Spacing.s
    },
});






