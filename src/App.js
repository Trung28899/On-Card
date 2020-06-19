import React from "react";
import "./App.css";
import Account from "./containers/Account/Account";
import { Route, Switch } from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import ViewPage from './containers/ViewPage/ViewPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/view/' component={ViewPage} />
        <Route path='/profile/' component={MainPage} />
        <Route path='/' component={Account} />
      </Switch>
    </div>
  );
}

export default App;
