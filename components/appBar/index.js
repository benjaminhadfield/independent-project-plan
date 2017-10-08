import React from 'react'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

import List from './components/list'

export default ({ open, onOpen, onClose }) => (
  <AppBar position='static'>
    <Toolbar>
      <IconButton color='contrast' aria-label='Menu' onClick={onOpen}>
        <MenuIcon />
      </IconButton>
      <Typography type='title' color='inherit'>Blockchain Project</Typography>
    </Toolbar>
    <Drawer open={open} onRequestClose={onClose}>
      <List />
    </Drawer>
  </AppBar>
)
