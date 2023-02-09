import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedMissions } from '../../redux/missions/mission';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchedMissions());
  }, [dispatch]);
  const data = useSelector((state) => state.missions);
  // const { missions } = data;
  console.log(data);
};

export default Missions;
