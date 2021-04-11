import { Toolbar } from '@material-ui/core'
import React, { useContext } from 'react'
import styles from './styles'
import Switch from '@material-ui/core/Switch'
import { DarkModeContext } from '../../context/themeContext'

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

  return (
    <Toolbar className={classes.toolBar}>
      <Switch checked={darkMode} onClick={toggle} />
    </Toolbar>
  )
}

export default ToolBar
