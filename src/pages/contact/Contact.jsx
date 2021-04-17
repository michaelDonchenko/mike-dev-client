import React from 'react'
import styles from './styles'
import { Grid } from '@material-ui/core'
import Form from '../../components/form/Form'
import { motion } from 'framer-motion'
import LeftGrid from './LeftGrid'

const Contact = ({ darkMode }) => {
  const classes = styles()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.flexDiv}>
          <LeftGrid classes={classes} darkMode={darkMode} />
        </Grid>

        <Grid item xs={12} sm={6} className={classes.flexDiv}>
          <Form />
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Contact
