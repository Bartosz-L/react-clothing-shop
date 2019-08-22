import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shoppage/ShopPage';
import Header from './components/Header/Header';
import AuthPage from './pages/AuthPage/AuthPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={AuthPage} />
      </Switch>
    </Router>
  );
};

export default App;
