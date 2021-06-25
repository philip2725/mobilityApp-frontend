import React from 'react';
import { Button, View, Text } from 'react-native';

function DiscoverScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Discover screen</Text>
            <Button
                title="Open Modal"
                onPress={() => navigation.navigate('MyModal')}
            />
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

export default DiscoverScreen;