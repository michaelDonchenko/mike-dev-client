import React, { useContext, useState } from 'react'
import { AppBar, Button } from '@material-ui/core'
import styles from './styles'
import ToolBar from './ToolBar'
import { DarkModeContext } from '../../context/themeContext'
import MenuIcon from '@material-ui/icons/Menu'
import Hidden from '@material-ui/core/Hidden'
import Slide from '@material-ui/core/Slide'
import MobileMenu from './MobileMenu'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const Navbar = () => {
  const { state } = useContext(DarkModeContext)
  const { darkMode } = state
  const classes = styles()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <AppBar
      className={darkMode ? classes.darkNav : classes.lightNav}
      position='static'
    >
      <Hidden smUp>
        <Button
          className={classes.navButton}
          color='primary'
          startIcon={<MenuIcon className={classes.icon} />}
          onClick={handleClickOpen}
        >
          Menu
        </Button>
      </Hidden>

      <ToolBar />
      <MobileMenu
        open={open}
        handleClose={handleClose}
        Transition={Transition}
      />
    </AppBar>
  )
}

export default Navbar
