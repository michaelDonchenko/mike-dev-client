import { Button, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles'

const ProjectCard = ({ project }) => {
  const classes = styles()

  const { projectTitle, projectText, img, demoLink, githubLink } = project

  return (
    <Paper elevation={3} className={classes.projectDiv}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography
            variant='h5'
            align='center'
            className={classes.projectTitle}
          >
            {projectTitle}
          </Typography>

          <Typography
            variant='subtitle1'
            align='center'
            className={classes.projectText}
          >
            {projectText}
          </Typography>

          <div className={classes.buttonsDiv}>
            <a
              href={demoLink}
              target='_blank'
              className={classes.link}
              rel='noreferrer'
            >
              <Button
                className={classes.button}
                variant='contained'
                color='primary'
              >
                Live demo
              </Button>
            </a>

            <a
              href={githubLink}
              target='_blank'
              className={classes.link}
              rel='noreferrer'
            >
              <Button
                className={classes.button}
                variant='outlined'
                color='secondary'
              >
                Github link
              </Button>
            </a>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <img
            src={img}
            className={classes.image}
            alt='Could not load the image'
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProjectCard
