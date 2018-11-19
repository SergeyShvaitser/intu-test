import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children, ...props}) => {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  )
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Button;
