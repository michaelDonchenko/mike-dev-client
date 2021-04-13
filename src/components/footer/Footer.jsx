import { Tooltip } from '@material-ui/core'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/themeContext'
import styles from './styles'

const Footer = () => {
  const { state } = useContext(DarkModeContext)
  const { darkMode } = state
  const classes = styles()

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{ textAlign: 'center' }}>
        Copyright © by Michael Donchenko
        <Tooltip title='login for admin user' placement='top-end'>
          <Link
            to='/login'
            className={darkMode ? classes.linkDark : classes.linkLight}
          >
            /Log-in
          </Link>
        </Tooltip>
      </p>
    </div>
  )
}

export default Footer
