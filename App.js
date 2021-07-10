import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import RootNav from './src/navigation';
// import firebase from 'firebase';
// import {firebaseConfig} from './src/config/firebase';


// firebase.initializeApp(firebaseConfig);

export default function App() {

  return (
    <Provider store={store}>

      <RootNav />

    </Provider>
  );

}

