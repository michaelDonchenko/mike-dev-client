import {
  Button,
  Dialog,
  DialogActions,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core'
import React, { useState } from 'react'
import styles from './style'
import Alert from '@material-ui/lab/Alert'
import { newVideo } from '../../controllers/admin'

const AddVideoModal = ({ width, open, handleClose, playlists, loadData }) => {
  const classes = styles()
  const [values, setValues] = useState({
    title: '',
    url: '',
    playlistId: '',
    error: '',
    loading: false,
  })

  const { title, url, playlistId, error, loading } = values

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSelect = (e) => {
    setValues({ ...values, playlistId: e.target.value })
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setValues({ ...values, loading: true })
    try {
      const { data } = await newVideo(title, url, playlistId)
      if (data.success) {
        await loadData()
        setValues({
          ...values,
          loading: false,
          title: '',
          url: '',
          playlistId: '',
          error: '',
        })
        handleClose()
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
            placeholder='Video title'
            variant='standard'
            type='text'
            onChange={handleChange}
          />

          <TextField
            className={classes.textField}
            name='url'
            value={url}
            placeholder='Video url'
            variant='standard'
            type='text'
            onChange={handleChange}
          />

          <FormControl className={classes.textField}>
            <InputLabel style={{ marginLeft: '15px' }} id='relatedPlaylist'>
              Related playlist
            </InputLabel>
            <Select
              onChange={handleSelect}
              labelId='relatedPlaylist'
              value={playlistId}
            >
              {playlists &&
                playlists.map((p, i) => (
                  <MenuItem key={i} value={p._id}>
                    {p.title}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
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
          {loading ? 'Loading...' : 'Add Video'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddVideoModal
