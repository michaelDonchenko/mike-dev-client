import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { motion } from 'framer-motion'
import YoutubeNav from '../../components/youtubeNav/YoutubeNav'
import VideosContainer from '../../components/videosContainer/VideosContainer'
import { getPlaylist } from '../../controllers/youtube'
import { useParams } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert'

const PlaylistPage = ({ width, darkMode }) => {
  const classes = styles()
  const { id } = useParams()

  const [values, setValues] = useState({
    loading: false,
    error: false,
    playlist: {},
    videos: [],
    page: 1,
    pages: '',
  })

  const { loading, error, playlist, videos, page, pages } = values

  const loadPlaylist = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await getPlaylist(id, page)
      setValues({
        ...values,
        loading: false,
        error: false,
        playlist: data.playlist,
        videos: data.relatedVideos,
        pages: data.pages,
      })
    } catch (error) {
      console.log(error.response)
      setValues({
        ...values,
        loading: false,
        error: error.response.data.message,
      })
    }
  }

  const handlePageChange = (event, value) => {
    setValues({ ...values, page: value })
  }

  useEffect(() => loadPlaylist(), [page])

  const errorDisplay = () => {
    if (error) {
      return (
        <Alert style={{ margin: '10px' }} severity='error'>
          {error}
        </Alert>
      )
    }
  }

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
          Loading...
        </Typography>
      ) : (
        <VideosContainer
          width={width}
          header={playlist && playlist.title}
          videos={videos && videos}
          playlistPage={true}
          body={playlist && playlist.description}
          values={values}
          handlePageChange={handlePageChange}
        />
      )}
    </motion.div>
  )
}

export default PlaylistPage
