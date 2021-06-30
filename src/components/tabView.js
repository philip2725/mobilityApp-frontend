import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Spacing, Fonts } from '../config';
import CustomIcon from './icon';

function CustomTabView(props) {

    const [transport, setTransport] = useState(props.icons[0]);

    function handleSelection(selection) {
        setTransport(selection)
    }

    return (

        <View style={[styles.container, props.style]}>

            {
                props.icons.map((iconName) => {
                    return (
                        <CustomIcon key={iconName} name={iconName} onPress={() => handleSelection(iconName)} style={transport == iconName ? {backgroundColor: Colors.gray_light} : {backgroundColor: Colors.white}}/>
                    )
                })
            }

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",

    },

});

export default CustomTabView;