import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home'
import Bottom_panel from './components/Bottom_panel'
import Reviews from './components/Reviews'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/reviews' component={Reviews} />
        </Switch>
      </Router>
      <Bottom_panel></Bottom_panel>
    </div>
  );
}

export default App;
