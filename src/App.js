import React, { useEffect } from 'react';
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
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import AuthPage from './pages/AuthPage/AuthPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

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
