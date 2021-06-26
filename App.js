import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import NavigationRoot from './src/navigation';
import RegisterScreen from './src/screens/registerScreen';

export default function App() {

  return (
    <Provider store={store}>

      {/* <NavigationRoot /> */}
      <RegisterScreen />

    </Provider>
  );

}

