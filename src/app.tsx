import React from 'react'
import {  Route, Switch } from "wouter";
import './app.css'
import GrandmastersPage from './pages/grandmasters/grandmasters-page';

function App(): React.ReactElement {
  return (
     <Switch>
      <Route path="/" component={GrandmastersPage} />
      <Route path="/grandmasters" component={GrandmastersPage} />
      <Route>404: No such page!</Route>
    </Switch>
  )
}

export default App
