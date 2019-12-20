import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import SearchResults from './components/Results'

function App() {
  return (
    <>
      <Search />
      <Switch>
        <Route exact path='/' component={SearchResults} />
      </Switch>
    </>
  );
}

export default App;
