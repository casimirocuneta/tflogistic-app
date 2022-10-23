import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import './styles/styles.js'

// Screen
import LoginScreen from './components/screens/LoginScreen'
import DashboardScreen from './components/screens/DashboardScreen.js'
import ClientListScreen from './components/screens/ClientListScreen'
import PageNotFoundScreen from './components/screens/PageNotFoundScreen.js'

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={LoginScreen} />
        <Route exact path='/dashboard' component={DashboardScreen} />
        <Route exact path='/client-list' component={ClientListScreen} />
        <Route component={PageNotFoundScreen} />
      </Switch>
    </main>
  )
}

export const Main = withRouter((props) => {
  return <App {...props} />
})

export default App
