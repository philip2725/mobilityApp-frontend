import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Spacing, Fonts } from '../config';
import CustomIcon from './icon';

function TransportCell(props) {

    return (

        <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>

            <View style={styles.leftContainer}>
                <Text style={styles.minutes}>59{'\n'}min</Text>
            </View>

            <View style={styles.rightContainer}>
            
                <View style={styles.topContainer}>
                    <Text>2 min entfernt</Text>
                    <Text>10:31-11:30</Text>
                </View>

                <View style={styles.line}></View>

                <View style={styles.bottomContainer}>
                    
                    <View style={styles.iconContainer}>
                        <CustomIcon name="electric-scooter" size={26} style={styles.icon}/>
                        <Text>Tier E-Scooter</Text>
                    </View>

                    <View style={styles.actionContainer}>

                        <Text>1,00€ + 0,19 €/min</Text>
                        <CustomIcon name="rightcircle" type="antdesign" color={Colors.primary} style={styles.icon}/>
                       
                    </View>

                </View>


            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: Colors.gray_light,
        flexDirection: "row",
        overflow: "hidden",
        marginBottom: Spacing.m,
    },
    leftContainer: {
        padding: Spacing.m,
        justifyContent: "center",
        backgroundColor: Colors.primary
    },
    rightContainer: {
     flex: 1
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: Spacing.s,
        paddingTop: Spacing.m
    },
    bottomContainer: {        
        padding: Spacing.s,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    actionContainer: {
        alignItems: "flex-end"
    },
    line : {
        height: 1,
        backgroundColor: Colors.gray_medium,
        marginLeft: Spacing.s,
        marginRight: Spacing.s
    },
    minutes: {
        textAlign: "center",
        color: Colors.white
    },
    icon: {
        backgroundColor: "transparent",
        padding: 0,
        marginTop: Spacing.s
    }

});

export default TransportCell;