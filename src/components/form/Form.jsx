import { Box, Button, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles'

const Form = () => {
  const classes = styles()

  return (
    <div className={classes.flexCenter}>
      <Paper elevation={3} className={classes.paper}>
        <Box my={2}>
          <Typography variant='h5' align='center' color='primary'>
            Submit your Message
          </Typography>
        </Box>
        <form className={classes.form}>
          <TextField
            className={classes.textField}
            name='email'
            placeholder='Your Email'
            variant='standard'
            type='email'
          />

          <TextField
            className={classes.textField}
            name='subject'
            placeholder='Subject'
            variant='standard'
            type='text'
          />

          <TextField
            className={classes.textField}
            name='message'
            placeholder='Your Message'
            variant='standard'
            multiline
            rows={5}
            type='text'
          />

          <Button
            className={classes.submitButton}
            variant='outlined'
            color='primary'
            type='submit'
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  )
}

export default Form
