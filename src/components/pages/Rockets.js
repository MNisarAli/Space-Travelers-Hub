import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  // `useDispatch` hook to access the `dispatch` function from `store`.
  const dispatch = useDispatch();
  // `useSelector` hook to get `rockets` data from the `store`.
  const rockets = useSelector((state) => state.rockets);
  // `useEffect` hook to dispatch the `fetchRockets` action when the component is mounted.
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]); // Added `dispatch` function as a dependency to re-run the effect when it changes.

  return (
    <div>Rockets</div>
  );
};

export default Rockets;
