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
import PageTournament from './pages/PageTournament';
import OutCome2 from './pages/OutCome2';
import OutCome3 from './pages/OutCome3';
import OutCome2Canhan from './pages/OutCome2Canhan';

function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
      <Route  path='/player' exact component={OutCome2} />
      <Route  path='/outcome3' exact component={OutCome3} />
      <Route  path='/playerCaNhan' exact component={OutCome2Canhan} />
        <Route  path='/tournaments' exact component={PageSelectTou} />
        <Route  path='/tournamentsHome' exact component={PageTournament} />
        <Route path='/about' component={SelectGamePage} />
        <Route path='/pagegame' component={PageGame} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
