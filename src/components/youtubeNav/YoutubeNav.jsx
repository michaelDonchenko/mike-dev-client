import { Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles'
import { NavLink } from 'react-router-dom'

const YoutubeNav = ({ darkMode }) => {
  const classes = styles()

  return (
    <Toolbar className={classes.toolBar}>
      <NavLink
        to='/youtube/videos'
        className={darkMode ? classes.navLinkDark : classes.navLinkLight}
        activeStyle={{
          color: darkMode ? '#ff165d' : '#26a69a',
        }}
      >
        <Typography className={classes.navText} variant='subtitle1'>
          Videos
        </Typography>
      </NavLink>

      <NavLink
        to='/youtube/playlists'
        className={darkMode ? classes.navLinkDark : classes.navLinkLight}
        activeStyle={{
          color: darkMode ? '#ff165d' : '#26a69a',
        }}
      >
        <Typography className={classes.navText} variant='subtitle1'>
          Playlists
        </Typography>
      </NavLink>
    </Toolbar>
  )
}

export default YoutubeNav
