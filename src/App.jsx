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
import Youtube from './pages/youtube/Youtube'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import AdminRoute from './components/routes/AdminRoute'
import AdminPannel from './pages/admin/AdminPannel'
import AdminYoutube from './pages/admin/AdminYoutube'
import ScrollToTop from './components/scrollTop/ScrollTop'
import YoutubeVideos from './pages/youtube/YoutubeVideos'
import YoutubePlaylists from './pages/youtube/YoutubePlaylists'
import PlaylistPage from './pages/youtube/PlaylistPage'

const App = () => {
  const { state } = useContext(DarkModeContext)
  const { darkMode } = state
  const classes = styles()

  const [width, setWidth] = useState(window.innerWidth)

  const handleWithChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    let resizeId
    window.addEventListener('resize', function () {
      clearTimeout(resizeId)
      resizeId = setTimeout(doneResizing, 1000)
    })

    function doneResizing() {
      handleWithChange()
    }
  }, [])

  return (
    <Router>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <ScrollToTop />
        <Navbar />

        <AnimatePresence>
          <Switch>
            <main className={darkMode ? classes.dark : classes.light}>
              <Container className={classes.mainContainer} maxWidth='lg'>
                <SocialMediaBar width={width} />

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

                <Route
                  exact
                  path='/youtube'
                  component={() => (
                    <Youtube width={width} darkMode={darkMode} />
                  )}
                />

                <Route
                  exact
                  path='/youtube/videos'
                  component={() => (
                    <YoutubeVideos width={width} darkMode={darkMode} />
                  )}
                />

                <Route
                  exact
                  path='/youtube/playlists'
                  component={() => (
                    <YoutubePlaylists width={width} darkMode={darkMode} />
                  )}
                />

                <Route
                  exact
                  path='/youtube/playlists/:id'
                  component={() => (
                    <PlaylistPage width={width} darkMode={darkMode} />
                  )}
                />

                <Route
                  exact
                  path='/contact'
                  component={() => (
                    <Contact width={width} darkMode={darkMode} />
                  )}
                />

                <Route
                  exact
                  path='/about'
                  component={() => <About width={width} darkMode={darkMode} />}
                />

                <AdminRoute
                  exact
                  path='/admin-pannel'
                  component={() => (
                    <AdminPannel darkMode={darkMode} width={width} />
                  )}
                />

                <AdminRoute
                  exact
                  path='/admin-youtube'
                  component={() => (
                    <AdminYoutube darkMode={darkMode} width={width} />
                  )}
                />

                <Footer width={width} />
              </Container>
            </main>
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </Router>
  )
}

export default App
