import React from 'react'
import AdminNav from '../../components/admin-nav/AdminNav'
import styles from './styles'
import { motion } from 'framer-motion'
import { Grid } from '@material-ui/core'
import PlaylistGrid from './PlaylistGrid'
import VideosGrid from './VideosGrid'

const AdminYoutube = ({ width }) => {
  const classes = styles()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={classes.main}
    >
      <AdminNav />
      <Grid container>
        <PlaylistGrid width={width} />

        <VideosGrid width={width} />
      </Grid>
    </motion.div>
  )
}

export default AdminYoutube
