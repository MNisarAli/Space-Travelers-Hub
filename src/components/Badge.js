import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';

const Badge = ({ text, active }) => (
  <span
    className={`badge ${active && 'badge-active'}`}
  >
    {text}
  </span>
);

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

Badge.defaultProps = {
  active: false,
};

export default Badge;
