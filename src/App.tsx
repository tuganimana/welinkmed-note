// eslint-disable-next-line no-use-before-define
import React from 'react'
import './App.css'
import './css/tailwind.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Signin from './components/dashboard/signin'
function App () {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Signin/>
        </Route>
        <Route path='/Signin'>
          <Signin/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}
export default App
