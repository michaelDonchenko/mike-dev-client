import { Toolbar } from '@material-ui/core'
import React, { useContext } from 'react'
import styles from './styles'
import { DarkModeContext } from '../../context/themeContext'
import Tooltip from '@material-ui/core/Tooltip'

const SocialMediaBar = () => {
  const classes = styles()
  const { state } = useContext(DarkModeContext)
  const { darkMode } = state
  return (
    <Toolbar className={classes.toolBar}>
      <Tooltip placement='left-start' title='Linkedin'>
        <a
          className={darkMode ? classes.iconDarkMode : classes.iconLightMode}
          href='https://www.linkedin.com/in/michael-donchenko-39aa711b3/'
          target='blank'
        >
          <i class='fab fa-linkedin'></i>
        </a>
      </Tooltip>

      <Tooltip placement='left-start' title='Github'>
        <a
          className={darkMode ? classes.iconDarkMode : classes.iconLightMode}
          href='https://github.com/michaelDonchenko'
          target='blank'
        >
          <i class='fab fa-github'></i>
        </a>
      </Tooltip>

      <Tooltip placement='left-start' title='Youtube'>
        <a
          className={darkMode ? classes.iconDarkMode : classes.iconLightMode}
          href='https://www.youtube.com/channel/UCnOX2mLQzn3GE8Vzrddtx3g'
          target='blank'
        >
          <i class='fab fa-youtube'></i>
        </a>
      </Tooltip>
    </Toolbar>
  )
}

export default SocialMediaBar
