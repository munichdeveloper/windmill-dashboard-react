import React, {lazy} from 'react'
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import CreateAccount from './pages/CreateAccount'
import ForgotPassword from './pages/ForgotPassword'
import Login from './pages/Login'

const Layout = lazy(() => import('./containers/Layout'))

function App() {
  return (
      <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/app" component={Layout} />
          <Redirect exact from="/" to="/app" />
        </Switch>
      </Router>
    </>
  )
}

export default App
