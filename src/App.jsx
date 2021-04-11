import React from 'react'
import { useContext } from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { DarkModeContext } from './context/themeContext'
import styles from './styles'
import darkTheme from './DarkTheme'
import lightTheme from './LightTheme'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  const { state } = useContext(DarkModeContext)
  const { darkMode } = state
  const classes = styles()

  console.log(darkTheme)

  return (
    <Router>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar />

        <Switch>
          <main className={darkMode ? classes.dark : classes.light}></main>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App
