import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Colors, Spacing, Fonts } from '../config';

function CustomSwitch(props) {
    return (

        <View style={props.style}>

            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={props.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor={Colors.gray_medium}
                onValueChange={props.onValueChange}
                value={props.value}
            />

        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         marginBottom: Spacing.xl,
        
//     },

// });

export default CustomSwitch;