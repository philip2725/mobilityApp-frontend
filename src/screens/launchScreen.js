import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import {LargeButton, PlainButton} from '../styles/button';


function LaunchScreen(props) {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            
            <View style={styles.container}>
                
            </View>

           <LargeButton title="Anmelden" border={true}/>

           <LargeButton title="Registrieren"/>

           <PlainButton title="Fortfahren ohne Anmeldung" />
           


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
   
});


export default LaunchScreen;