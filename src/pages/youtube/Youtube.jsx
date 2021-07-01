import { Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles'
import { motion } from 'framer-motion'
import YoutubeVideos from './YoutubeVideos'

const Youtube = ({ width, darkMode }) => {
  const classes = styles()
  return (
    <motion.div
      className={classes.flexDiv}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography
        className={darkMode ? classes.headerDark : classes.headerLight}
        align='center'
        variant={width < 700 ? 'h5' : 'h4'}
      >
        My Youtube channel
      </Typography>
      <YoutubeVideos />
    </motion.div>
  )
}

export default Youtube
