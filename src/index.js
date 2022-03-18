import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme/theme";
import AllAuctions from "./views/free/all-auctions";
import Signin from "./views/auth/signin";
import Signup from "./views/auth/signup";
// import { ColorModeSwitcher } from './ColorModeSwitcher';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AllAuctions />} />
        <Route path={`/signin`} element={Signin} />
        <Route path={`/signup`} element={Signup} />
      </Routes>
    </BrowserRouter>

    {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
      </Box> */}
  </ChakraProvider>,
  document.getElementById('root')
);