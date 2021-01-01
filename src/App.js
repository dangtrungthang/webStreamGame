import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectGamePage from './pages/SelectGamePage';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import PageSelectTou from './pages/PageSelectTou'
import PageGame from './pages/PageGame';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/tournaments' exact component={PageSelectTou} />
        <Route path='/about' component={SelectGamePage} />
        <Route path='/pagegame' component={PageGame} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
