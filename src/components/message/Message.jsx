import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles'

const Message = ({ message }) => {
  const classes = styles()
  return (
    <Paper elevation={2} className={classes.root}>
      <Typography variant='h6'>From: {message.email}</Typography>
      <Typography variant='subtitle1'>Subject: {message.subject}</Typography>
      <Typography variant='subtitle1'>Message: {message.message}</Typography>
    </Paper>
  )
}

export default Message
