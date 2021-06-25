import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import ExploreScreen from './src/screens/exploreScreen';


export default function App() {

  return (
    <Provider store={store}>

     <ExploreScreen />

    </Provider>
  );

}

