import { Button, Grid, Paper, Typography } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import React, { useEffect, useState } from 'react'
import CreatePlaylistModal from '../../components/youtubeModals/CreatePlaylistModal'
import UpdatePlaylistModal from '../../components/youtubeModals/UpdatePlaylistModal'
import { deletePlaylist, getPlaylists } from '../../controllers/admin'
import styles from './styles'

const PlaylistGrid = ({ width }) => {
  const classes = styles()
  const [values, setValues] = useState({
    playlists: [],
    loading: false,
    error: false,
    currentPlaylist: '',
  })

  const { playlists, loading, error, currentPlaylist } = values

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const loadPlaylists = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await getPlaylists()
      setValues({ ...values, playlists: data.playlists, loading: false })
    } catch (error) {
      console.log(error.response)
      setValues({
        ...values,
        error: error.response.data.message,
        loading: false,
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

  const handleDelete = async (playlistId) => {
    try {
      const { data } = await deletePlaylist(playlistId)

      if (data.success) {
        await loadPlaylists()
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

  const updateModalOpen = () => setUpdateModal(true)

  const updateModalClose = () => {
    setUpdateModal(false)
  }

  useEffect(() => loadPlaylists(), [])
  return (
    <>
      <Grid item xs={12} md={6} className={classes.flexCenter}>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={handleOpen}
        >
          Create Playlist
        </Button>

        <Paper className={classes.Container}>
          <Typography variant='h6' align='center' className={classes.header}>
            Playlists
          </Typography>

          {errorDisplay()}
          {loading ? (
            <p>Loading playlists...</p>
          ) : playlists && playlists.length === 0 ? (
            <p>No playlists to show</p>
          ) : (
            playlists.map((p, i) => (
              <div key={i} className={classes.playlistComponent}>
                <div className={classes.grow1}>
                  <Typography
                    className={classes.updateHeader}
                    variant='subtitle1'
                    onClick={() => {
                      updateModalOpen()
                      setValues({ ...values, currentPlaylist: p._id })
                    }}
                  >
                    {p.title}
                  </Typography>
                </div>

                <div>
                  <Button
                    onClick={() => handleDelete(p._id)}
                    variant='outlined'
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))
          )}
        </Paper>
      </Grid>

      <CreatePlaylistModal
        open={open}
        handleClose={handleClose}
        width={width}
        loadPlaylists={loadPlaylists}
      />

      <UpdatePlaylistModal
        open={updateModal}
        handleClose={updateModalClose}
        width={width}
        loadPlaylists={loadPlaylists}
        currentPlaylist={currentPlaylist}
      />
    </>
  )
}

export default PlaylistGrid
