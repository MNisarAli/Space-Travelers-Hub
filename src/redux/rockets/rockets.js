import { createAsyncThunk } from '@reduxjs/toolkit';

// Constants for the action type and API URL
const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';
const BASE_API_URL = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

// Create the async thunk for fetching the rockets data
export const fetchRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async () => {
    const response = await fetch(BASE_API_URL);
    const data = await response.json();
    // Map the data to the desired format and return the array of rockets
    return data.map((rocket) => ({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
      reserved: false,
    }));
  },
);

// Action creator to dispatch the RESERVE_ROCKET action
export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

// Action creator to dispatch the CANCEL_RESERVATION action
export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  id,
});

// The rocketReducer to handle the FETCH_ROCKETS and RESERVE_ROCKET actions
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    // When the FETCH_ROCKETS action is fulfilled,
    // return a new state array that combines the previous state and the payload
    case `${FETCH_ROCKETS}/fulfilled`:
      return [...state, ...action.payload];

    // When the RESERVE_ROCKET action is dispatched,
    // map over the state array and update the 'reserved' property of the matc
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });

    // When the CANCEL_RESERVATION action is dispatched,
    // map over the state array and update the 'reserved' property of the matching
    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });

    // Return the original state in case of any other action
    default:
      return state;
  }
};

export default rocketReducer;
