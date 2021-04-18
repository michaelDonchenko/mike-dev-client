import {
  Box,
  Button,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import styles from './styles'
import { postMessage } from '../../controllers/message'
import Alert from '@material-ui/lab/Alert'
import Slide from '@material-ui/core/Slide'

const Form = () => {
  const classes = styles()
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  })

  const [severity, setSeverity] = useState(false)
  const [responseMessage, setResponseMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const { email, subject, message } = formData

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const showSnackBar = (severity, setResponseMessage) => (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      TransitionComponent={Slide}
    >
      <Alert onClose={handleClose} severity={severity}>
        {setResponseMessage}
      </Alert>
    </Snackbar>
  )

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await postMessage(email, subject, message)
      setLoading(false)
      setSeverity('success')
      setResponseMessage(data.message)
      setFormData({
        email: '',
        subject: '',
        message: '',
      })
      handleOpen()
    } catch (error) {
      console.log(error.response)
      setLoading(false)
      setSeverity('error')
      setResponseMessage(error.response.data.message)
      handleOpen()
    }
  }

  return (
    <div className={classes.flexCenter}>
      <Paper elevation={3} className={classes.paper}>
        <Box my={2}>
          <Typography variant='h5' align='center' color='primary'>
            Submit your Message
          </Typography>
        </Box>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            name='email'
            value={email}
            placeholder='Your Email'
            variant='standard'
            type='email'
            onChange={handleChange}
          />

          <TextField
            className={classes.textField}
            name='subject'
            value={subject}
            placeholder='Subject'
            variant='standard'
            type='text'
            onChange={handleChange}
          />

          <TextField
            className={classes.textField}
            name='message'
            value={message}
            placeholder='Your Message'
            variant='standard'
            multiline
            rows={5}
            type='text'
            onChange={handleChange}
          />

          <Button
            disabled={open}
            className={classes.submitButton}
            variant='contained'
            color='primary'
            type='submit'
          >
            {loading ? 'Loading...' : 'Submit'}
          </Button>
        </form>
      </Paper>
      {showSnackBar(severity, responseMessage)}
    </div>
  )
}

export default Form
