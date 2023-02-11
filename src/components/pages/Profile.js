import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedMissions } from '../../redux/missions/mission';
import '../../style.css';

const Profile = () => {
  const dispatch = useDispatch();
  const missionsData = useSelector((state) => state.missions);

  // `useSelector` hook to get `rockets` data from the `store`.
  const rockets = useSelector((state) => state.rockets);

  // Filter the reserved rockets
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  // Destructuring the state object for better readability
  const { status: missionsStatus, missions: Mission } = missionsData;

  useEffect(() => {
    // Dispatch the `fetchedMissions` action if the missions status is idle
    if (missionsStatus === 'idle') {
      dispatch(fetchedMissions());
    }
  }, [dispatch, missionsStatus]);

  return (
    <>
      <section className="reserved-container">
        <article>
          <h2>My Missions</h2>
          <ul className="reserved-list">
            {
              Mission.filter((mission) => mission.isReserved)
                .map((mission) => (
                  <li key={mission.id}>
                    <h3>{mission.name}</h3>
                  </li>
                ))
            }
          </ul>
        </article>
        <article>
          <h2>My Rockets</h2>
          <ul className="reserved-list">
            {reservedRockets.map((rocket) => (
              <li key={rocket.id}>
                <h3>{rocket.name}</h3>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>

  );
};

export default Profile;
