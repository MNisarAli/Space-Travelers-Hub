import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedMissions } from '../../redux/missions/mission';
import '../../style.css';

const Profile = () => {
  const dispatch = useDispatch();
  const missionsData = useSelector((state) => state.missions);
  //   const { missionsStatus, missions } = missionsData;

  const missionsStatus = missionsData.status;
  const Mission = missionsData.missions;

  useEffect(() => {
    if (missionsStatus === 'idle') {
      dispatch(fetchedMissions());
    }
  }, [dispatch, missionsStatus]);
  return (
    <main>
      <div className="flex">
        <div>
          <h3>My Missions</h3>
          <div>
            {
              Mission.filter((mission) => (
                mission.isReserved === true
              )).map((mission) => (
                <div className="ele" key={mission.id}>
                  <h4>{mission.name}</h4>
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <h3>My Rockets</h3>
          <div />
        </div>
      </div>
    </main>

  );
};

export default Profile;
