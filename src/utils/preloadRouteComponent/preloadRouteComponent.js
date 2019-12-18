import { matchPath } from 'react-router-dom';
import routes from 'constants/routes';

const findComponentByPath = path => {
  const matchingRoute = routes.find(route => (
    matchPath(path, {
      path: route.path,
      exact: route.exact,
    })
  ));
  return matchingRoute ? matchingRoute.component : null;
};

const preloadRouteComponent = path => {
  const component = findComponentByPath(path);
  if (component && component.preload) {
    component.preload();
  }
};

export default preloadRouteComponent;
