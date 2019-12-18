import React from 'react';
import Router from 'root/Router';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from 'context/ThemeContext';
import ErrorBoundary from 'containers/ErrorBoundary';
import GlobalStyle from 'styles/GlobalStyles';
import client from 'config/apollo/client';

const App = () => (
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </ErrorBoundary>
);

export default App;
