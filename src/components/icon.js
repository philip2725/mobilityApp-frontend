import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, Fonts } from '../config';
import { Icon } from 'react-native-elements'


function CustomIcon(props) {

   let size = props.size ? props.size : 36

    return (

        <View style={[styles.container, props.style]}>
        
            <Icon
                name={props.name}
                onPress={props.onPress}
                size={size}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 10
    }
});

export default CustomIcon;