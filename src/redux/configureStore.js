import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';

const store = configureStore(
  {
    // Assign the rocketReducer to the rockets key in the store.
    reducer: {
      rockets: rocketReducer,
    },
  },
  // Apply the thunk middleware to the store.
  applyMiddleware((thunk)),
);

export default Store;
