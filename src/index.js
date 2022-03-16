import React from 'react';
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme/theme";
import AllAuctions from "./views/free/all-auctions";
import Signin from "./views/auth/signin";
import Signup from "./views/auth/signup";
// import { ColorModeSwitcher } from './ColorModeSwitcher';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <HashRouter>
      <Switch>
        <Route path={`/`} component={AllAuctions} />
        <Route path={`/signin`} component={Signin} />
        <Route path={`/signup`} component={Signup} />
      </Switch>
    </HashRouter>

    {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
      </Box> */}
  </ChakraProvider>
);