import { Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles'

const About = ({ width, darkMode }) => {
  const classes = styles()
  return (
    <div className={classes.flexCenter}>
      <Typography
        variant={width > 750 ? 'h5' : 'h6'}
        align='center'
        className={classes.header}
      >
        Check my programming skills{' '}
        <span
          className={darkMode ? classes.modelLinkDark : classes.modelLinkLight}
        >
          Here
        </span>
      </Typography>

      <Typography
        variant={width > 750 ? 'h5' : 'h6'}
        align='center'
        className={classes.header}
      >
        Want to know more about me? click{' '}
        <span
          className={darkMode ? classes.modelLinkDark : classes.modelLinkLight}
        >
          Here
        </span>
      </Typography>
    </div>
  )
}

export default About
