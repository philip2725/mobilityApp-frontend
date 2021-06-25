import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store} >
      <View style={styles.container}>
        <Text>Test1234</Text>

      </View>
    </Provider>
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
