import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import FullScreen from 'containers/FullScreen';
import PageTitle from 'components/PageTitle';

const StyledMsg = styled.p`
  color: ${({ theme }) => theme.colors.error}
`;

const Login = () => {
  const { state } = useLocation();
  const msg = state?.redirectMsg;
  return (
    <FullScreen>
      <PageTitle>Login</PageTitle>
      { msg && <StyledMsg>{msg}</StyledMsg> }
      <h1>Login</h1>
    </FullScreen>
  );
};

Login.propTypes = {};

export default Login;
