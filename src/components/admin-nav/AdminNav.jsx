import { Toolbar } from '@material-ui/core'
import React, { useContext } from 'react'
import styles from './styles'
import { DarkModeContext } from '../../context/themeContext'
import { Link } from 'react-router-dom'
import { logout } from '../../controllers/auth'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const AdminNav = () => {
  const classes = styles()
  const { state } = useContext(DarkModeContext)
  const { darkMode } = state
  const { dispatch } = useContext(AuthContext)

  const cookies = new Cookies()
  const history = useHistory()

  const handleLogout = async () => {
    try {
      await logout()

      //clear user cookie
      cookies.remove('user')

      //clear auth state
      dispatch({
        type: 'LOGOUT',
      })

      //push to home page
      history.push('/')
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <Toolbar className={classes.toolBar}>
      <Link
        className={darkMode ? classes.linkDark : classes.linkLight}
        to='/admin-pannel'
      >
        Admin pannel
      </Link>
      <Link
        className={darkMode ? classes.linkDark : classes.linkLight}
        to='/admin-youtube'
      >
        Youtube
      </Link>
      <span onClick={handleLogout} className={classes.spanLink}>
        Logout
      </span>
    </Toolbar>
  )
}

export default AdminNav
