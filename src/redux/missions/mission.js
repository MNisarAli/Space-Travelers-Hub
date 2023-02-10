import { createAsyncThunk } from '@reduxjs/toolkit';
import missionsService from '../../fetchMissions';

const FETCH_MISSIONS = 'FETCH_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';

const initialState = {
  status: 'idle',
  missions: [],
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return {
        ...state,
        status: 'succeeded',
        missions: action.payload,
      };

    case JOIN_MISSION: {
      const clone = [...state.missions];
      const updatedMissions = clone.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return { ...item, isReserved: !item.isReserved };
      });

      return {
        ...state,
        missions: updatedMissions,
      };
    }

    default:
      return state;
  }
};

export const fetchedMissions = createAsyncThunk(FETCH_MISSIONS, async (arg, thunkAPI) => {
  const payload = await missionsService.getAllMissions();
  thunkAPI.dispatch({ type: FETCH_MISSIONS, payload });
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export default missionsReducer;
