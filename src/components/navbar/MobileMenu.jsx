import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { Dialog, DialogContent, IconButton } from '@material-ui/core'
import MobileToolBar from './MobileToolBar'

const Menu = ({ open, handleClose, Transition }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <IconButton
        edge='start'
        color='inherit'
        onClick={handleClose}
        aria-label='close'
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        <MobileToolBar handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  )
}

export default Menu
