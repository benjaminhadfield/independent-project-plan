import React from 'react'

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import DraftsIcon from 'material-ui-icons/Drafts'

const Item = ({ icon, text, onClick }) => (
  <ListItem button onClick={onClick}>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
)

export default () => (
  <List>
    <Item text='Menu item 1' icon={<DraftsIcon />} />
  </List>
)
