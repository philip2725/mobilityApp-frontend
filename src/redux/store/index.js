import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterSlice';
import userReducer from '../reducers/userSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    },
    devTools: true
})