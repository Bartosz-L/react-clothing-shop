import React, { useEffect, lazy, Suspense } from 'react';
import { GlobalStyle } from './global.styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { connect } from 'react-redux';
import { loadUser } from './state/actions/userActions';
import { loadShopItems } from './state/actions/shopActions';

// components
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'));

const App = ({ loadUser, loadShopItems, currentUser }) => {
  useEffect(() => {
    loadShopItems();
    loadUser();
    // eslint-disable-next-line
  }, [loadShopItems, loadUser]);

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/login"
            render={() =>
              currentUser !== null ? <Redirect to="/" /> : <AuthPage />
            }
          />
        </Suspense>
      </Switch>
    </Router>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps,
  { loadUser, loadShopItems }
)(App);
