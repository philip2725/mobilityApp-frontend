import React from 'react';
import { View , StyleSheet } from 'react-native';
import { Colors, Spacing, Fonts } from '../config';
import CustomIcon from './icon';

function CustomTabView(props) {
    return (

        <View style={styles.container}>

            <CustomIcon name='train' style={{backgroundColor: Colors.gray_light}}/>
            <CustomIcon name='car-rental' />
            <CustomIcon name='local-taxi' />
            <CustomIcon name='electric-scooter' />
            <CustomIcon name='directions-bike' />
        
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