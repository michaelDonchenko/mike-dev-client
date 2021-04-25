import { Button, Toolbar } from '@material-ui/core'
import React, { useContext } from 'react'
import styles from './styles'
import { DarkModeContext } from '../../context/themeContext'
import Tooltip from '@material-ui/core/Tooltip'
import { motion } from 'framer-motion'
import CV from '../../utils/myCV.pdf'

const SocialMediaBar = ({ width }) => {
  const classes = styles()
  const { state } = useContext(DarkModeContext)
  const { darkMode } = state

  return (
    <Toolbar className={classes.toolBar}>
      <Tooltip placement='left-start' title='Linkedin'>
        <motion.a
          className={darkMode ? classes.iconDarkMode : classes.iconLightMode}
          href='https://www.linkedin.com/in/michael-donchenko-39aa711b3/'
          target='_blank'
          rel='noreferrer'
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <i class='fab fa-linkedin'></i>
        </motion.a>
      </Tooltip>

      <Tooltip placement='left-start' title='Github'>
        <motion.a
          className={darkMode ? classes.iconDarkMode : classes.iconLightMode}
          href='https://github.com/michaelDonchenko'
          target='_blank'
          rel='noreferrer'
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <i class='fab fa-github'></i>
        </motion.a>
      </Tooltip>

      <Tooltip placement='left-start' title='Youtube'>
        <motion.a
          className={darkMode ? classes.iconDarkMode : classes.iconLightMode}
          href='https://www.youtube.com/channel/UCnOX2mLQzn3GE8Vzrddtx3g'
          target='_blank'
          rel='noreferrer'
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <i class='fab fa-youtube'></i>
        </motion.a>
      </Tooltip>

      <span style={{ flex: 1 }}></span>

      <a href={CV} target='_blank' className={classes.link}>
        <Button
          variant='outlined'
          color='secondary'
          className={width < 415 ? classes.buttonCV : null}
        >
          download my CV
        </Button>
      </a>
    </Toolbar>
  )
}

export default SocialMediaBar
