import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { connect } from 'react-redux';
import { loadUser } from './state/actions/userActions';

// components
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import AuthPage from './pages/AuthPage/AuthPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

const App = ({ loadUser, currentUser }) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
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
  { loadUser }
)(App);
