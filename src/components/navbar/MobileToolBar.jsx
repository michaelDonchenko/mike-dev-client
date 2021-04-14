import { Toolbar } from '@material-ui/core'
import React, { useContext } from 'react'
import styles from './styles'
import { DarkModeContext } from '../../context/themeContext'
import { NavLink } from 'react-router-dom'

const MobileToolbar = ({ handleClose }) => {
  const { state } = useContext(DarkModeContext)
  const { darkMode } = state

  const classes = styles()

  const activeStyle = {
    textDecoration: 'underline',
    fontWeight: '600',
    textDecorationColor: darkMode ? '#ff165d' : '#00bcd4',
  }

  return (
    <Toolbar className={classes.mobileToolBar}>
      <NavLink
        className={
          darkMode ? classes.mobileNavLinkDark : classes.mobileNavLinkLight
        }
        to='/'
        exact
        activeStyle={activeStyle}
        onClick={handleClose}
      >
        Mike dev
      </NavLink>

      <NavLink
        className={
          darkMode ? classes.mobileNavLinkDark : classes.mobileNavLinkLight
        }
        to='/projects'
        exact
        activeStyle={activeStyle}
        onClick={handleClose}
      >
        Projects
      </NavLink>

      <NavLink
        className={
          darkMode ? classes.mobileNavLinkDark : classes.mobileNavLinkLight
        }
        to='/youtube'
        exact
        activeStyle={activeStyle}
        onClick={handleClose}
      >
        Youtube
      </NavLink>

      <NavLink
        className={
          darkMode ? classes.mobileNavLinkDark : classes.mobileNavLinkLight
        }
        to='/contact'
        exact
        activeStyle={activeStyle}
        onClick={handleClose}
      >
        Contact
      </NavLink>

      <NavLink
        className={
          darkMode ? classes.mobileNavLinkDark : classes.mobileNavLinkLight
        }
        to='/about'
        exact
        activeStyle={activeStyle}
        onClick={handleClose}
      >
        About
      </NavLink>
    </Toolbar>
  )
}

export default MobileToolbar
