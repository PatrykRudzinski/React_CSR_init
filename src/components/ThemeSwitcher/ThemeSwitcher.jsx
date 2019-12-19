import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useThemeContext } from 'context/ThemeContext';

const size = '2rem';

const StyledContainer = styled.div`
  border: ${({ theme }) => `2px solid ${theme.colors.text}`};
  border-radius: 100px;
  height: ${size};
  width: calc(${size} * 2);
  cursor: pointer;
`;

const StyledSwitcher = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.body}`};
  border-radius: 100%;
  height: calc(${size} - 4px);
  width: calc(${size} - 4px);
  background: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.time.standard}ms;
  transform: ${({ toRight }) => toRight && `translateX(${size})`};
`;

const ThemeSwitcher = () => {
  const changeTheme = useThemeContext();
  const [darkTheme, setDarkTheme] = useState(false);
  const changeHandler = () => {
    setDarkTheme(currentTheme => !currentTheme);
  };
  useEffect(() => {
    changeTheme(darkTheme ? 'DARK' : 'DEFAULT');
  }, [darkTheme, changeTheme]);
  return (
    <div>
      <StyledContainer onClick={changeHandler}>
        <StyledSwitcher toRight={darkTheme} />
      </StyledContainer>
    </div>
  );
};

ThemeSwitcher.propTypes = {};

export default ThemeSwitcher;
