import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { motion } from 'framer-motion'
import YoutubeNav from '../../components/youtubeNav/YoutubeNav'
import VideosContainer from '../../components/videosContainer/VideosContainer'
import { getVideos } from '../../controllers/youtube'
import Alert from '@material-ui/lab/Alert'

const YoutubeVideos = ({ width, darkMode }) => {
  const classes = styles()

  const [values, setValues] = useState({
    loading: false,
    videos: [],
    error: false,
    page: 1,
    pages: '',
  })

  const { videos, loading, error, page } = values

  const loadVideos = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await getVideos(page)
      setValues({
        ...values,
        videos: data.videos,
        pages: data.pages,
        loading: false,
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  const handlePageChange = (event, value) => {
    setValues({ ...values, page: value })
  }

  useEffect(() => loadVideos(), [page])

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
    <>
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
          <VideosContainer
            width={width}
            header={'Recent videos'}
            videos={videos && videos}
            values={values}
            handlePageChange={handlePageChange}
          />
        )}
      </motion.div>
    </>
  )
}

export default YoutubeVideos
