import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import './styles/styles.js'

// Screen
import LoginScreen from './components/screens/LoginScreen'

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={LoginScreen} />
      </Switch>
    </main>
  )
}

export const Main = withRouter((props) => {
  return <App {...props} />
})

export default App
