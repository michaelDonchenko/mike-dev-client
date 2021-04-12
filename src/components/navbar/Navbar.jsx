import React, { useContext } from 'react'
import { AppBar, Button } from '@material-ui/core'
import styles from './styles'
import ToolBar from './ToolBar'
import { DarkModeContext } from '../../context/themeContext'
import MenuIcon from '@material-ui/icons/Menu'
import Hidden from '@material-ui/core/Hidden'

const Navbar = () => {
  const { state } = useContext(DarkModeContext)
  const { darkMode } = state
  const classes = styles()
  return (
    <AppBar
      className={darkMode ? classes.darkNav : classes.lightNav}
      position='static'
    >
      <Hidden smUp>
        <Button
          className={classes.navButton}
          color='primary'
          startIcon={<MenuIcon className={classes.icon} />}
        >
          Menu
        </Button>
      </Hidden>

      <ToolBar />
    </AppBar>
  )
}

export default Navbar
