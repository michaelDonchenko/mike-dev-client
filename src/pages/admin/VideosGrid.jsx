import { Button, Grid, Paper, Typography } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import React, { useEffect, useState } from 'react'
import Paginate from '../../components/pagination/Paginate'
import AddVideoModal from '../../components/youtubeModals/AddVideoModal'
import UpdateVideoModal from '../../components/youtubeModals/UpdateVideoModal'
import { deleteVideo, getPlaylists, getVideos } from '../../controllers/admin'
import styles from './styles'

const VideosGrid = ({ width }) => {
  const classes = styles()
  const [values, setValues] = useState({
    videos: [],
    playlists: [],
    loading: false,
    error: false,
    count: '',
    pages: '',
    page: 1,
    currentVideoId: '',
  })

  const {
    videos,
    playlists,
    loading,
    error,
    count,
    page,
    pages,
    currentVideoId,
  } = values

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const loadData = async () => {
    setValues({ ...values, loading: true })
    try {
      const videos = await getVideos(page)
      const playlists = await getPlaylists()
      setValues({
        ...values,
        loading: false,
        videos: videos.data.videos,
        count: videos.data.count,
        pages: videos.data.pages,
        playlists: playlists.data.playlists,
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

  const errorDisplay = () => {
    if (error) {
      return (
        <Alert style={{ margin: '10px' }} severity='error'>
          {error}
        </Alert>
      )
    }
  }

  const handleDelete = async (videoId) => {
    try {
      const { data } = await deleteVideo(videoId)

      if (data.success) {
        await loadData()
      }
    } catch (error) {
      console.log(error.response)
      setValues({
        ...values,
        error: error.response.data.message,
        loading: false,
      })
    }
  }

  const [updateModal, setUpdateModal] = useState(false)

  const updateModalOpen = () => {
    setUpdateModal(true)
  }

  const updateModalClose = () => {
    setUpdateModal(false)
  }

  const handlePageChange = (event, value) => {
    setValues({ ...values, page: value })
  }

  useEffect(() => loadData(), [page])

  return (
    <Grid item xs={12} md={6} className={classes.flexCenter}>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={handleOpen}
      >
        Add video
      </Button>

      <Paper className={classes.Container}>
        <Typography variant='h6' align='center' className={classes.header}>
          Videos
        </Typography>

        {errorDisplay()}
        {loading ? (
          <p>Loading...</p>
        ) : videos && videos.length === 0 ? (
          <p>No Videos to show</p>
        ) : (
          videos.map((v, i) => (
            <div key={i} className={classes.playlistComponent}>
              <div className={classes.grow1}>
                <Typography
                  className={classes.updateHeader}
                  variant='subtitle1'
                  onClick={() => {
                    updateModalOpen()
                    setValues({ ...values, currentVideoId: v._id })
                  }}
                >
                  {v.title}
                </Typography>
              </div>

              <div>
                <Button onClick={() => handleDelete(v._id)} variant='outlined'>
                  Delete
                </Button>
              </div>
            </div>
          ))
        )}
        <Paginate
          page={page}
          pages={pages}
          handlePageChange={handlePageChange}
        />
      </Paper>

      <AddVideoModal
        width={width}
        open={open}
        handleClose={handleClose}
        playlists={playlists && playlists}
        loadData={loadData}
      />

      <UpdateVideoModal
        width={width}
        open={updateModal}
        handleClose={updateModalClose}
        playlists={playlists && playlists}
        loadData={loadData}
        currentVideoId={currentVideoId}
      />
    </Grid>
  )
}

export default VideosGrid
