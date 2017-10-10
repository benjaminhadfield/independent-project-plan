import React from 'react'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Code from 'material-ui-icons/Code'

import List from './components/list'

export default ({ open, onOpen, onClose, ...props }) => (
  <AppBar position='static'>
    <Toolbar>
      <IconButton color='contrast' aria-label='Menu' onClick={onOpen}>
        <MenuIcon />
      </IconButton>
      <Typography type='title' color='inherit' style={{ flex: 1 }}>
        Blockchain Project
      </Typography>
      <IconButton
        component='a'
        color='contrast'
        href='https://github.com/benjaminhadfield'
        target='_blank'
      >
        <Code />
      </IconButton>
    </Toolbar>
    <Drawer open={open} onRequestClose={onClose}>
      <List />
    </Drawer>
  </AppBar>
)
