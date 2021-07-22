import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
