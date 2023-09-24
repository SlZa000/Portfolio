import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import aboutme from './components/pages/aboutme';
import ContactUs from './components/pages/Contact';
import netapi from './components/pages/netapi';
import fronttech from './components/pages/fronttech';

function App() {
  return (
    <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Projects' component={Projects} />
            <Route path='/aboutme' component={aboutme} />
            <Route path='/netapi' component={netapi} />
            <Route path='/fronttech' component={fronttech} />
      </Switch>
      <ContactUs />
    </Router>
  );
}

export default App;
