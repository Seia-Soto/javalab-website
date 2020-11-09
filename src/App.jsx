import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {
  ThemeProvider,
  CSSReset
} from '@chakra-ui/core'

// NOTE: Pages
import HomePage from './pages/Home'
import SlackPage from './pages/Slack'

const App = props => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/slack' component={SlackPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
