import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/reducers/counterSlice';

function ExploreScreen(props) {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text>{count}</Text>

            <Button
                onPress={() => {
                    dispatch(increment())
                }}
                title="Increment Me"
            />

            <Button
                onPress={() => {
                    dispatch(decrement())
                }}
                title="Decrement Me"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default ExploreScreen;