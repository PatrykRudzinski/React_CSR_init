import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { paths } from 'constants/routes';
import preloadRouteComponent from 'utils/preloadRouteComponent';

const LinkPreload = ({
  to, children, preload, ...rest
}) => {
  useEffect(() => {
    if (preload === 'onMount') preloadRouteComponent(to);
  }, [preload, to]);
  const mouseEnterHandler = useMemo(
    () => (preload === 'onMouseEnter' ? () => preloadRouteComponent(to) : null),
    [preload, to],
  );
  return (
    <Link to={to} onMouseEnter={mouseEnterHandler} {...rest}>
      {children}
    </Link>
  );
};

LinkPreload.defaultProps = {
  preload: 'onMount',
};

LinkPreload.propTypes = {
  to: PropTypes.oneOf(Object.values(paths)).isRequired,
  preload: PropTypes.oneOf(['onMount', 'onMouseEnter']),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default LinkPreload;
