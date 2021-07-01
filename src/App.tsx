// eslint-disable-next-line no-use-before-define
import React from 'react'
import './App.css'
import './css/tailwind.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home'
function App () {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path=''>
          <Home/>

        </Route>
      </Switch>
    </Router>
    </>
  )
}
export default App
