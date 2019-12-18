import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { paths } from 'constants/routes';

import { useAuthContext } from 'context/AuthContext';

const PrivateRoute = ({
  redirect, redirectMsg, ...rest
}) => {
  const { user } = useAuthContext();
  const hasAccess = () => !!user;
  if (hasAccess()) {
    return <Route {...rest} />;
  }
  return (
    <Redirect
      to={{
        pathname: redirect,
        state: { redirectMsg },
      }}
    />
  );
};

PrivateRoute.defaultProps = {
  redirect: paths.LOGIN,
};

PrivateRoute.propTypes = {
  redirect: PropTypes.node,
  redirectProps: PropTypes.shape({}),
  redirectMsg: PropTypes.string,
};

export default PrivateRoute;
