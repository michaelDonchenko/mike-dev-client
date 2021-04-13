import { Button, Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = (props) => {
  const { width, darkMode } = props
  const classes = styles()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={classes.flexCenter}
    >
      <div className={classes.flexDiv}>
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
      </div>

      <div className={classes.flexCenter}>
        <Typography variant='subtitle1' align='center'>
          Do you like what you see?
        </Typography>

        <Link to='/contact' className={classes.link}>
          <Button
            className={classes.hireButton}
            variant='outlined'
            color='primary'
          >
            Hire me now
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Home
