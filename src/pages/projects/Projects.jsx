import { Typography } from '@material-ui/core'
import React from 'react'
import ProjectCard from '../../components/project card/ProjectCard'
import styles from './styles'
import projects from '../../utils/projects'
import { motion } from 'framer-motion'

const Projects = ({ width, darkMode }) => {
  const classes = styles()

  return (
    <motion.div
      className={classes.flexDiv}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography
        className={darkMode ? classes.headerDark : classes.headerLight}
        align='center'
        variant={width < 700 ? 'h5' : 'h4'}
      >
        My recent projects
      </Typography>

      <div className={classes.flexWrap}>
        {projects &&
          projects.map((project, i) => (
            <div>
              <ProjectCard key={i} project={project} />
            </div>
          ))}
      </div>
    </motion.div>
  )
}

export default Projects
