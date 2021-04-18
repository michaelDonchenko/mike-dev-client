import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Typography,
} from '@material-ui/core'
import React from 'react'
import styles from './styles'
import frontSkills from '../../utils/frontSkills'
import backSkills from '../../utils/backSkills'
import extraSkills from '../../utils/extraSkills'

const Skills = ({ skills, skillsClose, width }) => {
  const classes = styles()
  return (
    <Dialog
      open={skills}
      onClose={skillsClose}
      fullWidth
      maxWidth='lg'
      fullScreen={width < 700}
    >
      <DialogTitle>
        <Typography variant='h5' align='center'>
          My programming Skills
        </Typography>
      </DialogTitle>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={6}>
          <Typography
            className={classes.header}
            align='center'
            variant='h6'
            color='primary'
          >
            Frontend
          </Typography>
          <hr className={classes.hr}></hr>

          {frontSkills.map((skill, i) => (
            <Typography key={i} align='center' variant='subtitle1'>
              {skill.title}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography
            className={classes.header}
            align='center'
            variant='h6'
            color='primary'
          >
            Backend
          </Typography>
          <hr className={classes.hr}></hr>

          {backSkills.map((skill, i) => (
            <Typography key={i} align='center' variant='subtitle1'>
              {skill.title}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12}>
          <Typography
            className={classes.header}
            align='center'
            variant='h6'
            color='primary'
          >
            Extras
          </Typography>
          <hr className={classes.hr}></hr>
          <div className={classes.closing}>
            {extraSkills.map((skill, i) => (
              <Typography key={i} align='center' variant='subtitle1'>
                {skill.title}
              </Typography>
            ))}
          </div>
        </Grid>
      </Grid>
      <DialogActions>
        <Button color='secondary' variant='outlined' onClick={skillsClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Skills
