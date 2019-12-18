import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import authManager from 'utils/authManager';

const AuthContext = createContext(null);

const { Provider } = AuthContext;

const initialAuthData = {};

const AuthProvider = props => {
  const [authData, setAuthData] = useState(initialAuthData);
  useEffect(() => {
    const currentAuthData = authManager.getCookiesAuthData();
    if (currentAuthData) setAuthData(currentAuthData);
  }, []);
  const onLogout = () => setAuthData(initialAuthData);
  const onLogin = newAuthData => setAuthData(newAuthData);
  const authDataValue = useMemo(() => ({ ...authData, onLogin, onLogout }), [authData]);
  return <Provider value={authDataValue} {...props} />;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
