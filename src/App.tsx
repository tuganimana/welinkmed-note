// eslint-disable-next-line no-use-before-define
import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import './css/tailwind.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signin from './components/dashboard/signin'
import Dashboard from './components/dashboard/pages/navbar'
import Welcome from './components/dashboard/welcome'
function App () {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Signin/>
        </Route>
        <Route path='/signin'>
          <Signin/>
        </Route>
        <Route path="/dashboard">
          <Dashboard>
            <Welcome/>
          </Dashboard>
        </Route>
      </Switch>
    </Router>
    </>
  )
}
export default App
