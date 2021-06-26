import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import RootNav from './src/navigation';

export default function App() {

  return (
    <Provider store={store}>

      <RootNav />

    </Provider>
  );

}

