import { Tooltip } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { DarkModeContext } from '../../context/themeContext'
import { AuthContext } from '../../context/authContext'
import LoginModel from './LoginModel'
import styles from './styles'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { state } = useContext(DarkModeContext)
  const { darkMode } = state
  const classes = styles()

  const { state: authState } = useContext(AuthContext)
  const { user } = authState

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ textAlign: 'center' }}>
          Copyright © by Michael Donchenko
          {user && user.role === 'admin' ? (
            <Link
              to='/admin-pannel'
              className={
                darkMode ? classes.modelLinkDark : classes.modelLinkLight
              }
            >
              /Admin pannel
            </Link>
          ) : (
            <Tooltip title='login for admin user' placement='top-end'>
              <span
                onClick={handleClickOpen}
                className={
                  darkMode ? classes.modelLinkDark : classes.modelLinkLight
                }
              >
                /Log-in
              </span>
            </Tooltip>
          )}
        </p>
      </div>

      <LoginModel open={open} handleClose={handleClose} classes={classes} />
    </>
  )
}

export default Footer
