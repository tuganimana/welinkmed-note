// eslint-disable-next-line no-use-before-define
import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import './css/tailwind.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signin from './components/dashboard/signin'
import Dashboard from './components/dashboard/pages/navbar'
import Welcome from './components/dashboard/welcome'
import Addresident from './components/dashboard/pages/addresident'
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
        <Route path="/resident-add">
          <Dashboard>
            <Welcome/>
          </Dashboard>
        </Route>
        <Route path="/addresident">
          <Dashboard>
          <Addresident/>
          </Dashboard>
        </Route>
      </Switch>
    </Router>
    </>
  )
}
export default App
