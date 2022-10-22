import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import './styles/styles.js'

// Screen
import LoginScreen from './components/screens/LoginScreen'
import DashboardScreen from './components/screens/DashboardScreen.js'

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={LoginScreen} />
        <Route exact path='/dashboard' component={DashboardScreen} />
      </Switch>
    </main>
  )
}

export const Main = withRouter((props) => {
  return <App {...props} />
})

export default App
