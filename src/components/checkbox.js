import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Colors, Spacing, Fonts } from '../config';

function CustomCheckbox(props) {
    return (

        <View style={styles.container}>
            <CheckBox
                onIconPress={props.onIconPress}
                checked={props.checked}
                checkedColor={Colors.primary}
                containerStyle={styles.checkBox}
                size={35}
            />
            <Text style={[Fonts.body, styles.label]}>{props.title}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: Spacing.s,
        flexDirection: "row",
        alignItems: "center",
    },
    checkBox: {
        backgroundColor: "transparent",
        padding: 0
    },
    label: {
        
    }

});

export default CustomCheckbox;