import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'

const LeftGrid = ({ classes, darkMode }) => {
  return (
    <div>
      <Box p={1}>
        <Typography variant='h6'>
          Current status:
          <span className={darkMode ? classes.statusDark : classes.statusLight}>
            Open for work
          </span>
        </Typography>

        <Typography variant='subtitle1'>
          Looking for a Frontend/Fullstack development job.
        </Typography>

        <Box my={4}>
          <Typography variant='subtitle1' className={classes.subTitle}>
            Phone: <span style={{ fontWeight: '600' }}>0544721640</span>
          </Typography>
          <Typography variant='subtitle1'>
            Email:
            <span style={{ fontWeight: '600' }}> michael1994d@gmail.com</span>
          </Typography>
        </Box>

        <a
          href='https://wa.me/972544721640'
          className={classes.link}
          target='_blank'
          rel='noreferrer'
        >
          <Button variant='outlined' className={classes.whatsAppButton}>
            Send whatsApp
            <i
              style={{ fontSize: '30px', marginLeft: '10px' }}
              class='fab fa-whatsapp'
            ></i>
          </Button>
        </a>
      </Box>
    </div>
  )
}

export default LeftGrid
