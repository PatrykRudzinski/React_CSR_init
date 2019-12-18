import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, type, ...rest }) => (
  <button type={type} {...rest}>
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
