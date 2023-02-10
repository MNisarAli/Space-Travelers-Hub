import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedMissions, joinMission } from '../../redux/missions/mission';
import Badge from '../Badge';
import '../../style.css';

const MissionsTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.missions);
  const { status, missions } = data;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchedMissions());
    }
  }, [dispatch, status]);

  const handleClick = (mission) => {
    dispatch(joinMission(mission));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th aria-label="empty-th" />
        </tr>
      </thead>
      <tbody>
        {
          missions.map((mission) => {
            const {
              id, name, description, isReserved,
            } = mission;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{description}</td>
                <td>
                  <Badge
                    text={isReserved ? 'Active member' : 'Not a member'}
                    active={isReserved}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className={`${isReserved && 'btn-active'}`}
                    onClick={() => handleClick(mission)}
                  >
                    {isReserved ? 'Leave Mission' : 'Join Mission'}
                  </button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default MissionsTable;
