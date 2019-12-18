import React, { Suspense } from 'react';
import {
  Route, Switch, useLocation,
} from 'react-router-dom';

import routes from 'constants/routes';
import AuthProvider from 'context/AuthContext';
import PrivateRoute from 'root/_components/PrivateRoute';
import { PageLoader } from 'components';
import { LayoutGeneral, PageTransitionWrapper } from 'containers';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import { bpValues } from 'styles/themes/_core';

const breakpoints = Object.keys(bpValues).map(v => ({ [v]: bpValues[v] }));
setDefaultBreakpoints(breakpoints);

const Router = () => {
  const location = useLocation();
  return (
    <AuthProvider>
      <BreakpointProvider>
        <LayoutGeneral>
          <Suspense fallback={<PageLoader />}>
            <Switch location={location} key={location.pathname}>
              {routes.map(({
                component: Component, path, isPrivate, ...rest
              }) => {
                if (isPrivate) {
                  return (
                    <PrivateRoute path={path} key={path} {...rest}>
                      <PageTransitionWrapper>
                        <Component />
                      </PageTransitionWrapper>
                    </PrivateRoute>
                  );
                }
                return (
                  <Route path={path} key={path} {...rest}>
                    <PageTransitionWrapper>
                      <Component {...rest} />
                    </PageTransitionWrapper>
                  </Route>
                );
              })}
            </Switch>
          </Suspense>
        </LayoutGeneral>
      </BreakpointProvider>
    </AuthProvider>
  );
};

export default Router;
