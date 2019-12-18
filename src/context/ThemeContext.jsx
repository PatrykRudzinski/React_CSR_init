import React, {
  createContext,
  useState,
  useContext,
} from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { defaultTheme, darkTheme } from 'styles/themes';

const ThemeContext = createContext(defaultTheme);

const { Provider } = ThemeContext;

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const changeTheme = theme => {
    switch (theme) {
      case 'DARK':
        return setCurrentTheme(darkTheme);
      default:
        return setCurrentTheme(defaultTheme);
    }
  };
  return (
    <Provider value={changeTheme}>
      <SCThemeProvider theme={currentTheme}>
        {children}
      </SCThemeProvider>
    </Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;
