// eslint-disable-next-line no-use-before-define
import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import './css/tailwind.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signin from './components/dashboard/signin'
import Dashboard from './components/dashboard/pages/navbar'
import Welcome from './components/dashboard/welcome'
import Addresident from './components/dashboard/pages/addresident'
import ResidentInfo from './components/dashboard/pages/residentinfo'
import UserMaintenance from './components/dashboard/pages/usermaintenance'
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
        <Route path="/add-resident">
          <Dashboard>
          <Addresident/>
          </Dashboard>
        </Route>
        <Route path="/resident-info">
          <Dashboard>
          <ResidentInfo/>
          </Dashboard>
        </Route>
        <Route path="/user-maintenance">
          <Dashboard>
          <UserMaintenance/>
          </Dashboard>
        </Route>
      </Switch>
    </Router>
    </>
  )
}
export default App
