import React from 'react'

import Tabs, { Tab } from 'material-ui/Tabs'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'

import Container from '../container'
import TabContents from './components/tabContents'

export default class WorkPackage extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: 0
    }
  }

  handleChange (event, value) {
    this.setState({ value })
  }

  render () {
    const { value } = this.state
    return (
      <Container>
        <Typography paragraph type='title'>Work Package Description</Typography>
        <Paper>
          <Tabs
            scrollable
            value={value}
            onChange={this.handleChange}
            indicatorColor='primary'
            textColor='primary'
            scrollButtons='hidden'
          >
            <Tab label='Item one' />
            <Tab label='Item one' />
          </Tabs>
        </Paper>
        <TabContents show={value === 0}>
          <Typography>Tab 1</Typography>
        </TabContents>
        <TabContents show={value === 1}>
          <Typography>Tab 2</Typography>
        </TabContents>
      </Container>
    )
  }
}
