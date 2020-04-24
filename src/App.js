import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Standardization from './components/Standardization/Standardization';
import Header from './components/Header/Header';
import DDRules from './components/Rules/Rules'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header/>
        <Switch>
        <Route exact path='/Standarization' component={Standardization} />
        <Route exact path='/Rules' component={DDRules} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
