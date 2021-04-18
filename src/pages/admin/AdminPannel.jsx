import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import AdminNav from '../../components/admin-nav/AdminNav'
import Message from '../../components/message/Message'
import { getMessages } from '../../controllers/message'
import styles from './styles'
import { motion } from 'framer-motion'

const AdminPannel = () => {
  const classes = styles()
  const [values, setValues] = useState({
    messages: [],
    loading: true,
    error: false,
  })

  const { loading, error, messages } = values

  const loadMessages = async () => {
    try {
      const { data } = await getMessages()
      setValues({ ...values, messages: data.messages, loading: false })
    } catch (error) {
      console.log(error.response)
      setValues({
        ...values,
        error: error.response.data.message,
        loading: false,
      })
    }
  }

  useEffect(() => loadMessages(), [])

  return (
    <motion.div
      className={classes.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <AdminNav />
      <Typography variant='h4' align='center' className={classes.header}>
        User messages
      </Typography>

      <div className={classes.messagesContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : messages && messages.length === 0 ? (
          <p>No messages</p>
        ) : (
          messages.map((m, i) => <Message message={m} key={i} />)
        )}
      </div>
    </motion.div>
  )
}

export default AdminPannel
