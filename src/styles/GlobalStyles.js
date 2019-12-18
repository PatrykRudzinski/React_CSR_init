import { createGlobalStyle } from 'styled-components';
import core from 'styles/themes/_core';

const themeValues = ['color', 'background-color'];
const createTransitions = () => {
  const arr = themeValues.map(val => `${val} ${core.time.longest}ms`);
  return arr.join(', ');
};

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.body};
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    transition: ${createTransitions()};
  }
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
