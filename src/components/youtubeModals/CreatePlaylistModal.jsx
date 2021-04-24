import { Button, Dialog, DialogActions, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import styles from './style'
import { newPlaylist } from '../../controllers/admin'
import Alert from '@material-ui/lab/Alert'

const CreatePlaylistModal = ({ width, open, handleClose, loadPlaylists }) => {
  const classes = styles()
  const [values, setValues] = useState({
    title: '',
    description: '',
    error: '',
    loading: false,
  })

  const { title, description, error, loading } = values

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setValues({ ...values, loading: true })
    try {
      const res = await newPlaylist(title, description)
      if (res.data.success) {
        setValues({
          ...values,
          title: '',
          description: '',
          error: false,
          loading: false,
        })
        handleClose()
        loadPlaylists()
      }
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

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth='sm'
      fullScreen={width < 700}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            name='title'
            value={title}
            placeholder='Playlist title'
            variant='standard'
            type='text'
            onChange={handleChange}
          />

          <TextField
            className={classes.textField}
            name='description'
            value={description}
            placeholder='Description'
            variant='standard'
            type='text'
            multiline
            rows={5}
            onChange={handleChange}
          />
        </form>

        {errorDisplay()}
      </div>
      <DialogActions>
        <Button color='secondary' variant='outlined' onClick={handleClose}>
          Close
        </Button>
        <Button
          type='submit'
          color='primary'
          variant='contained'
          onClick={handleSubmit}
        >
          {loading ? 'Loading...' : 'Create'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreatePlaylistModal
