import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Backdrop, CircularProgress } from '@material-ui/core';
import { darkTheme, theme } from './theme';
import { AppStateProvider } from "./context";
import containers from './state';
import { CookiesProvider } from 'react-cookie';

const PrivateRoute = React.lazy(() => import('./components/PrivateRoute'))
const Layout = React.lazy(() => import('./components/Layout'))
const Store = React.lazy(() => import('./views/Store'))
const Home = React.lazy(() => import('./views/Home'))
const StoreListing = React.lazy(() => import('./views/Store/StoreListing'))
const StoreDetail = React.lazy(() => import('./views/Store/StoreDetail'))
const ProductDetail = React.lazy(() => import('./views/Store/ProductDetail'))
const StoreDepartments = React.lazy(() => import('./views/Store/StoreDepartments'))
const Offers = React.lazy(() => import('./views/Store/Offers'))
const StoreDepartmentsCategory = React.lazy(() => import('./views/Store/StoreDepartmentsCategory'))
const Checkout = React.lazy(() => import('./views/Checkout'))
const Success = React.lazy(() => import('./views/Checkout/Success'))
const Login = React.lazy(() => import('./views/Login'))
const Account = React.lazy(() => import('./views/Account'))
const Orders = React.lazy(() => import('./views/Account/Orders'))
const Address = React.lazy(() => import('./views/Account/Address'))
const AddNewAddress = React.lazy(() => import('./views/Account/AddNewAddress'))
const Payments = React.lazy(() => import('./views/Account/Payments'))
const Location = React.lazy(() => import('./views/Location'))
const PrivacyPolicy = React.lazy(() => import('./views/PrivacyPolicy/PrivacyPolicy'))
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
                  <Route exact path="/" component={Home} />
                  {/* <Route exact path="/stores" component={StoreListing} /> */}
                  <Route exact path="/store/:storeName/(storefront)?" component={StoreDetail} />
                  <Route exact path="/store/:storeName/offers" component={Offers} />
                  <Route exact path="/store/:storeName/:product" component={ProductDetail} />
                  <Route exact path="/store/:storeName/departments" component={StoreDepartments} />
                  <Route exact path="/store/:storeName/departments/:slug/:categoryId" component={StoreDepartmentsCategory} />
                  <Route exact path="/checkout" component={Checkout} />
                  <Route exact path="/success" component={Success} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/location" component={Location} />
                  <Route exact path="/account" component={Account} />
                  <PrivateRoute exact path="/account/orders" component={Orders} />
                  <PrivateRoute exact path="/account/addresses" component={Address} />
                  <PrivateRoute exact path="/account/addaddress/:id?" component={AddNewAddress} />
                  <PrivateRoute exact path="/account/payments" component={Payments} />
                  <PrivateRoute exact path="/privacy-policy" component={PrivacyPolicy} />
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
