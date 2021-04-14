import { Toolbar } from '@material-ui/core'
import React, { useContext } from 'react'
import styles from './styles'
import Switch from '@material-ui/core/Switch'
import { DarkModeContext } from '../../context/themeContext'
import { NavLink } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'

const ToolBar = () => {
  const { state, dispatch } = useContext(DarkModeContext)
  const { darkMode } = state

  const classes = styles()
  const toggle = () => {
    dispatch({
      type: 'TOGGLE',
      payload: !darkMode,
    })
  }

  const activeStyle = {
    textDecoration: 'underline',
    fontWeight: '600',
    textDecorationColor: darkMode ? '#ff165d' : '#00bcd4',
  }

  return (
    <Toolbar className={classes.toolBar}>
      <div className={classes.leftDiv}>
        <Hidden xsDown>
          <NavLink
            className={darkMode ? classes.navLinkDark : classes.navLinkLight}
            to='/'
            exact
            activeStyle={activeStyle}
          >
            Mike dev
          </NavLink>

          <NavLink
            className={darkMode ? classes.navLinkDark : classes.navLinkLight}
            to='/projects'
            exact
            activeStyle={activeStyle}
          >
            Projects
          </NavLink>

          <NavLink
            className={darkMode ? classes.navLinkDark : classes.navLinkLight}
            to='/youtube'
            exact
            activeStyle={activeStyle}
          >
            Youtube
          </NavLink>

          <NavLink
            className={darkMode ? classes.navLinkDark : classes.navLinkLight}
            to='/contact'
            exact
            activeStyle={activeStyle}
          >
            Contact
          </NavLink>

          <NavLink
            className={darkMode ? classes.navLinkDark : classes.navLinkLight}
            to='/about'
            exact
            activeStyle={activeStyle}
          >
            About
          </NavLink>
        </Hidden>
      </div>
      <div className={classes.rightDiv}>
        <Switch checked={darkMode} onClick={toggle} />
      </div>
    </Toolbar>
  )
}

export default ToolBar
