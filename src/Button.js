import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, color }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

export default Button;
