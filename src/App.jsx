import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import { DarkModeContext } from './context/themeContext'
import styles from './styles'
import darkTheme from './DarkTheme'
import lightTheme from './LightTheme'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import SocialMediaBar from './components/socialMediaBar/SocialMediaBar'
import Projects from './pages/projects/Projects'
import { AnimatePresence } from 'framer-motion'
import Footer from './components/footer/Footer'

const App = () => {
  const { state } = useContext(DarkModeContext)
  const { darkMode } = state
  const classes = styles()
  const [width, setWidth] = useState(window)

  const handleWithChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWithChange)
    return () => window.removeEventListener('resize', handleWithChange)
  }, [])

  return (
    <Router>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar />

        <AnimatePresence>
          <Switch>
            <main className={darkMode ? classes.dark : classes.light}>
              <Container className={classes.mainContainer} maxWidth='lg'>
                <SocialMediaBar />

                <Route
                  exact
                  path='/'
                  component={() => <Home width={width} darkMode={darkMode} />}
                />
                <Route
                  exact
                  path='/projects'
                  component={() => (
                    <Projects width={width} darkMode={darkMode} />
                  )}
                />

                <Footer />
              </Container>
            </main>
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </Router>
  )
}

export default App
