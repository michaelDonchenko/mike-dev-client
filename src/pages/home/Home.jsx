import { Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles'
import { useSpring, animated } from 'react-spring'

const Home = (props) => {
  const { width, darkMode } = props
  const classes = styles()
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <div className={classes.flexCenter}>
      <animated.div style={animation} className={classes.flexDiv}>
        <Typography
          className={classes.header}
          variant={width < 700 ? 'h4' : 'h3'}
          align='center'
        >
          Michael Donchenko
        </Typography>

        <Typography
          className={darkMode ? classes.headerDark : classes.headerLight}
          variant={width < 700 ? 'h4' : 'h2'}
          align='center'
        >
          Fullstack web developer
        </Typography>

        <Typography
          className={classes.header}
          variant={width < 700 ? 'h4' : 'h3'}
          align='center'
        >
          Welcome to my world
        </Typography>
      </animated.div>
    </div>
  )
}

export default Home
