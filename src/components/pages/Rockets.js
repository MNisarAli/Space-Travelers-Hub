import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserveRocket, cancelReservation } from '../../redux/rockets/rockets';

const Rockets = () => {
  // useDispatch hook to access the dispatch function from store.
  const dispatch = useDispatch();

  // useSelector hook to get rockets data from the store.
  const rockets = useSelector((state) => state.rockets);

  // `handleReserveRocket` dispatches `reserveRocket` action with selected rocket ID.
  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  // `handleCancelReservation` dispatches `cancelReservation` action with selected rocket ID.
  const handleCancelReservation = (id) => {
    dispatch(cancelReservation(id));
  };

  // useEffect hook to dispatch the `fetchRockets` action when the component is mounted,
  // to fetch the list of rockets from the API.
  useEffect(() => {
    dispatch(fetchRockets());
  });

  return (
    <section className="rockets-container">
      {rockets.map((rocket) => (
        <li className="rocket" key={rocket.id}>
          <img className="rocket-img" src={rocket.image} alt={rocket.name} />
          <article className="rocket-info">
            <h2 className="rocket-name">{rocket.name}</h2>
            <p className="rocket-description">
              {rocket.reserved && <span className="rocket-reserve-tag">Reserved</span>}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button className="rocket-reserve-btn reserved" type="button" onClick={() => handleCancelReservation(rocket.id)}>
                Cancel Reservation
              </button>
            ) : (
              <button className="rocket-reserve-btn" type="button" onClick={() => handleReserveRocket(rocket.id)}>
                Reserve Rocket
              </button>
            )}
          </article>
        </li>
      ))}
    </section>
  );
};

export default Rockets;
