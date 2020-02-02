import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './blocks/Header';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';

export const App = () => (
  <div className='main-wrapper'>
    <Router>
      <Header />

      <Switch>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </div>
);
