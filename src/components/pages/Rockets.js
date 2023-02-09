import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  // `useDispatch` hook to access the `dispatch` function from `react-redux`.
  const dispatch = useDispatch();

  // `useEffect` hook to dispatch the `fetchRockets` action when the component is mounted.
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]); // Added `dispatch` function as a dependency to re-run the effect when it changes.

  return (
    <div>Rockets</div>
  );
};

export default Rockets;
