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
import Orderdetail from './components/dashboard/pages/orderdetail'
import ResidentInfo from './components/dashboard/pages/residentinfo'
import UserMaintenance from './components/dashboard/pages/usermaintenance'
import Home from './components/home/pages/homenavbar'
import Body from './components/home/pages/body'
function App () {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
        <Home>
            <Body/>
          </Home>
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
        <Route path="/order-detail">
          <Dashboard>
            <Orderdetail/>
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
