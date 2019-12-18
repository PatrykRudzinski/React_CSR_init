import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'components';

const LayoutGeneral = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

LayoutGeneral.propTypes = {
  children: PropTypes.node,
};

export default LayoutGeneral;
