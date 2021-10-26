import React from 'react';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Cards from './components/Cards';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='' exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
