// eslint-disable-next-line no-use-before-define
import React from 'react'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'antd/dist/antd.css'
import './css/tailwind.css'
import './css/mytailwind.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signin from './components/dashboard/signin'
import Dashboard from './components/dashboard/admin/navbar'
import Welcome from './components/dashboard/welcome'
import Addresident from './components/dashboard/admin/addresident'
import Orderdetail from './components/dashboard/admin/orderdetail'
import ViewResidents from './components/dashboard/admin/residents'
import MarComponent from './components/dashboard/admin/MarComponent'
import UserMaintenance from './components/dashboard/admin/usermaintenance'
import Body from './components/home/pages/body'
import Orderedit from './components/dashboard/admin/orderedit'
import Medicationdue from './components/dashboard/admin/medicationdue'
import ClientDashboard from './components/dashboard/clients/navbar'
import ClientWelcome from './components/dashboard/clients/clientwelcome'
import NotFound from './components/dashboard/404'
import Editresident from './components/dashboard/admin/editresident'
import Addclient from './components/dashboard/clients/addclient'
import WelcomeRoot from './components/dashboard/welcomeroot'
import DashboardRoot from './components/dashboard/rootuser/navbar'
import UserMaintenanceRoot from './components/dashboard/rootuser/usermaintenance'
import DueOrder from './components/dashboard/admin/dueorder'
import ResidentView from './components/dashboard/admin/residentDue'
import { frontEndPoints } from './utils/enums'
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
  {/* ROOT */}
        <Route path="/root-dashboard">
          <DashboardRoot>
            <WelcomeRoot/>
          </DashboardRoot>
        </Route>
        <Route path="/root-maintenance">
          <DashboardRoot>
          <UserMaintenanceRoot/>
          </DashboardRoot>
        </Route>
  {/* END ROOT */}
        <Route path="/add-resident">
          <Dashboard>
          <Addresident/>
          </Dashboard>
        </Route>
        <Route path="/order-detail/:residentid">
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
        <Route path="/due-orders">
          <Dashboard>
            <DueOrder/>
          </Dashboard>
        </Route>
        <Route path="/resident-infos/:residentid">
          <Dashboard>
            <ViewResidents/>
          </Dashboard>
        </Route>
        <Route path="/user-maintenance">
          <Dashboard>
          <UserMaintenance/>
          </Dashboard>
        </Route>
        <Route path="/resident-edit/:residentid">
          <Dashboard>
          <Editresident/>
          </Dashboard>
        </Route>
        <Route path="/user-mar/:residentid">
          <Dashboard>
          <MarComponent/>
          </Dashboard>
        </Route>
        <Route path={frontEndPoints.RESIDENT_DUE}>
          <Dashboard>
             <ResidentView/>
          </Dashboard>
        </Route>
        {/* ========================================START CLIENT EDNPOINT============================ */}
        <Route path="/user-dashboard">
          <ClientDashboard>
            <ClientWelcome/>
          </ClientDashboard>
        </Route>
        <Route path="/addclient">
          <ClientDashboard>
            <Addclient/>
          </ClientDashboard>
        </Route>
        {/* =======================END POINT========================= */}
        <Route component={NotFound} />
      </Switch>
    </Router>
    </>
  )
}
export default App
