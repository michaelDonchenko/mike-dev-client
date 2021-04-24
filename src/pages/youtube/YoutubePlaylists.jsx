import { Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { motion } from 'framer-motion'
import YoutubeNav from '../../components/youtubeNav/YoutubeNav'
import { Link } from 'react-router-dom'
import { getPlaylists } from '../../controllers/youtube'
import Alert from '@material-ui/lab/Alert'

const YoutubePlaylists = ({ width, darkMode }) => {
  const classes = styles()
  const [values, setValues] = useState({
    loading: false,
    playlists: [],
    error: false,
  })

  const { playlists, loading, error } = values

  const loadPlaylists = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await getPlaylists()
      setValues({ ...values, playlists: data.playlists, loading: false })
    } catch (error) {
      console.log(error.response)
    }
  }

  const errorDisplay = () => {
    if (error) {
      return (
        <Alert style={{ margin: '10px' }} severity='error'>
          {error}
        </Alert>
      )
    }
  }

  useEffect(() => loadPlaylists(), [])
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
      <YoutubeNav darkMode={darkMode} />

      {errorDisplay()}
      {loading ? (
        <Typography variant='h5' align='center'>
          Loading videos..
        </Typography>
      ) : (
        <Paper elevation={3}>
          {playlists.map((p, i) => (
            <div className={classes.playlistDiv} key={i}>
              <Link to={`/youtube/playlists/${p._id}`} className={classes.link}>
                <Typography variant='h6' color='primary'>
                  {p.title}
                </Typography>
              </Link>

              <Typography variant='subtitle1'>{p.description}</Typography>
            </div>
          ))}
        </Paper>
      )}
    </motion.div>
  )
}

export default YoutubePlaylists
