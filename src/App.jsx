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
import SlackPage from './pages/Slack'

const App = props => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <Switch>
          <Route exact path='/slack' component={SlackPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
