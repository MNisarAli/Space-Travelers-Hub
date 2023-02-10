import { createAsyncThunk } from '@reduxjs/toolkit';

// Constants for the action type and API URL
const FETCH_ROCKETS = 'FETCH_ROCKETS';
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
      type: rocket.rocket_type,
      image: rocket.flickr_images[0],
    }));
    // Dispatch the action with the payload of the mapped data
    dispatch({
      type: FETCH_ROCKETS,
      payload: rockets,
    });
  },
);

// The rocketReducer to handle the FETCH_ROCKETS action
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
