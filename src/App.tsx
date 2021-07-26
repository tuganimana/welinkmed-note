// eslint-disable-next-line no-use-before-define
import React from 'react'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'antd/dist/antd.css'
import './css/tailwind.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signin from './components/dashboard/signin'
import Dashboard from './components/dashboard/pages/navbar'
import Welcome from './components/dashboard/welcome'
import Addresident from './components/dashboard/pages/addresident'
import Orderdetail from './components/dashboard/pages/orderdetail'
import ResidentInfo from './components/dashboard/pages/residentinfo'
import { Example } from './components/dashboard/pages/print'
import UserMaintenance from './components/dashboard/pages/usermaintenance'
import Body from './components/home/pages/body'
import Orderedit from './components/dashboard/pages/orderedit'
import Medicationdue from './components/dashboard/pages/medicationdue'
import ClientDashboard from './components/dashboard/clients/navbar'
import ClientWelcome from './components/dashboard/clients/clientwelcome'
function App () {
  AOS.init()
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
            <Body/>
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
        <Route path="/order-edit">
          <Dashboard>
            <Orderedit/>
          </Dashboard>
        </Route>
        <Route path="/medication-due">
          <Dashboard>
            <Medicationdue/>
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
        <Route path="/marPdf">
          <Dashboard>
        <Example/>
          </Dashboard>
        </Route>
        {/* ========================================START CLIENT EDNPOINT============================ */}
        <Route path="/user-dashboard">
          <ClientDashboard>
            <ClientWelcome/>
          </ClientDashboard>
        </Route>
        {/* =======================END POINT========================= */}
      </Switch>
    </Router>
    </>
  )
}
export default App
