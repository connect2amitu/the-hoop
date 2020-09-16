import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Backdrop, CircularProgress } from '@material-ui/core';
import { darkTheme, theme } from './theme';
import { AppStateProvider } from "./context";
import containers from './state';
import { CookiesProvider } from 'react-cookie';

const Layout = React.lazy(() => import('./components/Layout'))
const Store = React.lazy(() => import('./views/Store'))
const StoreListing = React.lazy(() => import('./views/Store/StoreListing'))
const StoreDepartments = React.lazy(() => import('./views/Store/StoreDepartments'))
const StoreDepartmentsCategory = React.lazy(() => import('./views/Store/StoreDepartmentsCategory'))
const Checkout = React.lazy(() => import('./views/Checkout'))
const Success = React.lazy(() => import('./views/Checkout/Success'))
const Login = React.lazy(() => import('./views/Login'))
const Account = React.lazy(() => import('./views/Account'))
const Location = React.lazy(() => import('./views/Location'))
const Page404 = React.lazy(() => import('./components/404'))



function App({ isDark }) {

  return (
    <AppStateProvider containers={containers}>
      <CookiesProvider>
        <ThemeProvider theme={isDark ? darkTheme : theme}>
          <CssBaseline />
          <BrowserRouter >
            <Suspense fallback={<Backdrop open={true}> <CircularProgress color="inherit" /> </Backdrop>}>
              <Layout>
                <Switch>
                  <Route exact path="/" component={Store} />
                  <Route exact path="/stores" component={StoreListing} />
                  <Route exact path="/store/:storeName/(storefront)?" component={Store} />
                  <Route exact path="/store/:storeName/departments" component={StoreDepartments} />
                  <Route exact path="/store/:storeName/departments/:categoryId" component={StoreDepartmentsCategory} />
                  <Route exact path="/checkout" component={Checkout} />
                  <Route exact path="/success" component={Success} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/location" component={Location} />
                  <Route exact path="/account" component={Account} />
                  <Route exact path="*" component={Page404} />
                </Switch>
              </Layout>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </CookiesProvider>
    </AppStateProvider>
  );
}

export default App
