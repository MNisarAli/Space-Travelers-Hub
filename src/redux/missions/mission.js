import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const Api = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

const FETCH_MISSIONS = 'space-travelers-hub/missions/FETCH_MISSIONS';

const fetchedMissions = createAsyncThunk(
  FETCH_MISSIONS,
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const { data } = response;
    const missions = data.map((mission) => ({
      name: mission.mission_name,
      id: mission.mission_id,
      description: mission.description,
    }));
    console.log(missions);
    return missions;
  },
);

export default function missionsReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_MISSIONS}/fulfilled`:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export { fetchedMissions };
