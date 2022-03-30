import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme/theme";
import AllAuctions from "./views/free/all-auctions";
// import { ColorModeSwitcher } from './ColorModeSwitcher';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AllAuctions />} />
      </Routes>
    </BrowserRouter>

  </ChakraProvider>,
  document.getElementById('root')
);