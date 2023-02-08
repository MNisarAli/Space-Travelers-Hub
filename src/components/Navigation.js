import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png';

const Navigation = () => (
  <nav>
    <div className="logo-container">
      <img className="logo" src={logo} alt="Planet logo" />
      <h1 className="logo-title">Space Travelers&apos; Hub</h1>
    </div>
    <ul className="nav-links">
      <li>
        <NavLink className="nav-link" to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/missions">Missions</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/profile">My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
