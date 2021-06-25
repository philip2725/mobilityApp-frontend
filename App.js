import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import NavigationRoot from './src/navigation';

export default function App() {

  return (
    <Provider store={store}>

      <NavigationRoot />

    </Provider>
  );

}

