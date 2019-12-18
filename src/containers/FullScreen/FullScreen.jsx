import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFullScreen = styled.div`
  min-height: ${({ theme }) => `calc(100vh - ${theme.elements.header.height})`};
  padding-top: ${({ theme }) => theme.elements.header.height};
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify};
  align-items: center;
`;

const FullScreen = ({ children, justify }) => (
  <StyledFullScreen justify={justify}>
    {children}
  </StyledFullScreen>
);

FullScreen.defaultProps = {
  justify: 'center',
};

FullScreen.propTypes = {
  justify: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default FullScreen;
