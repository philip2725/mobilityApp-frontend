import React from 'react';
import { StyleSheet } from 'react-native';

import { SearchBar } from 'react-native-elements';
import { Colors } from '../config';


function CustomSearchBar(props) {
    return (

        <SearchBar
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            value={props.value}
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
        />

    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "transparent",
        flex: 1,
        padding: 0,
        justifyContent: "center",
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    inputContainer: {
        backgroundColor: Colors.white
    },
});

export default CustomSearchBar;