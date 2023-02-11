import { createAsyncThunk } from '@reduxjs/toolkit';

// Constants for the action type and API URL
const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const BASE_API_URL = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

// Create the async thunk for fetching the rockets data
export const fetchRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async (post, { dispatch }) => {
    const response = await fetch(BASE_API_URL);
    const data = await response.json();
    // Map the data to the desired format
    const rockets = data.map((rocket) => ({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
    }));
    // Dispatch the action with the payload of the mapped data
    dispatch({
      type: FETCH_ROCKETS,
      payload: rockets,
    });
  },
);

// Action creator to dispatch the RESERVE_ROCKET action
export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

// The rocketReducer to handle the FETCH_ROCKETS action
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
};

export default rocketReducer;
