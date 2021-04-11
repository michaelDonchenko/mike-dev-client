import React, { useContext } from 'react'
import { AppBar } from '@material-ui/core'
import styles from './styles'
import ToolBar from './ToolBar'
import { DarkModeContext } from '../../context/themeContext'

const Navbar = () => {
  const { state } = useContext(DarkModeContext)
  const { darkMode } = state
  const classes = styles()
  return (
    <AppBar
      className={darkMode ? classes.darkNav : classes.lightNav}
      position='sticky'
    >
      <ToolBar />
    </AppBar>
  )
}

export default Navbar
