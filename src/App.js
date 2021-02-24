import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import LanguageContext from './contexts/language-context'
import { ToastProvider } from 'react-toast-notifications'
import Login from './views/Login'
import ForgotPassword from './views/ForgotPassword'

function App () {
  const [language, setLanguage] = useState('en')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ToastProvider>
        <Router>
          <Switch>
            <Route
              path='/login'
              exact
              component={Login}
            />

            <Route
              path='/forgot-password'
              exact
              component={ForgotPassword}
            />

            <Redirect from='*' to='/login'/>
          </Switch>
        </Router>
      </ToastProvider>
    </LanguageContext.Provider>
  )
}

export default App
