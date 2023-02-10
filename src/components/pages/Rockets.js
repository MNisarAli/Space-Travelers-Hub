import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserveRocket } from '../../redux/rockets/rockets';

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
    <section className="rockets-container">
      {rockets.map((rocket) => (
        <li className="rocket" key={rocket.id}>
          <img className="rocket-img" src={rocket.image} alt={rocket.name} />
          <article className="rocket-info">
            <h2 className="rocket-name">{rocket.name}</h2>
            <p className="rocket-description">{rocket.description}</p>
            <button className="rocket-reserve-btn" type="button" onClick={() => dispatch(reserveRocket(rocket.id))}>
              Reserve Rocket
            </button>
          </article>
        </li>
      ))}
    </section>
  );
};

export default Rockets;
