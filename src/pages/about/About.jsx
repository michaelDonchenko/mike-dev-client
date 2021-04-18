import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import styles from './styles'
import { motion } from 'framer-motion'
import Skills from '../../components/about-models/Skills'
import AboutModel from '../../components/about-models/AboutModel'

const About = ({ width, darkMode }) => {
  const classes = styles()
  const [skills, setSkills] = useState(false)
  const [aboutModel, setAboutModel] = useState(false)

  const skillsOpen = () => {
    setSkills(true)
  }

  const skillsClose = () => {
    setSkills(false)
  }

  const aboutMeOpen = () => {
    setAboutModel(true)
  }

  const aboutMeClose = () => {
    setAboutModel(false)
  }

  return (
    <motion.div
      className={classes.flexCenter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography
        variant={width > 750 ? 'h5' : 'h6'}
        align='center'
        className={classes.header}
      >
        Check my programming skills{' '}
        <span
          className={darkMode ? classes.modelLinkDark : classes.modelLinkLight}
          onClick={skillsOpen}
        >
          Here
        </span>
      </Typography>

      <Typography
        variant={width > 750 ? 'h5' : 'h6'}
        align='center'
        className={classes.header}
      >
        Want to know more about me? click{' '}
        <span
          onClick={aboutMeOpen}
          className={darkMode ? classes.modelLinkDark : classes.modelLinkLight}
        >
          Here
        </span>
      </Typography>

      <Skills skills={skills} skillsClose={skillsClose} width={width} />

      <AboutModel
        aboutModel={aboutModel}
        aboutMeClose={aboutMeClose}
        width={width}
      />
    </motion.div>
  )
}

export default About
