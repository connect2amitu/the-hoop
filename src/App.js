import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Backdrop, CircularProgress } from '@material-ui/core';
import { darkTheme, theme } from './theme';
import { AppStateProvider } from "./context";
import containers from './state';

const Layout = React.lazy(() => import('./components/Layout'))
const Store = React.lazy(() => import('./views/Store'))
const StoreListing = React.lazy(() => import('./views/Store/StoreListing'))
const StoreDepartments = React.lazy(() => import('./views/Store/StoreDepartments'))
const Checkout = React.lazy(() => import('./views/Checkout'))
const Login = React.lazy(() => import('./views/Login'))
const Account = React.lazy(() => import('./views/Account'))
const Page404 = React.lazy(() => import('./components/404'))



function App({ isDark }) {

  return (
    <BrowserRouter >
      <AppStateProvider containers={containers}>
        <ThemeProvider theme={isDark ? darkTheme : theme}>
          <CssBaseline />
          <Suspense fallback={<Backdrop open={true}> <CircularProgress color="inherit" /> </Backdrop>}>
            <Layout>
              <Switch>
                <Route exact path="/" component={Store} />
                <Route exact path="/stores" component={StoreListing} />
                <Route exact path="/store/:storeName/(storefront)?" component={Store} />
                <Route exact path="/store/:storeName/departments" component={StoreDepartments} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/account" component={Account} />
                <Route exact path="*" component={Page404} />
              </Switch>
            </Layout>
          </Suspense>
        </ThemeProvider>
      </AppStateProvider>
    </BrowserRouter>
  );
}

export default App
