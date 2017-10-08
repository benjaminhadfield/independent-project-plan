import React from 'react'
import AppBar from '../components/appBar'

export default Component => (class extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  setDrawer (open) {
    this.setState({ open })
  }

  render () {
    return (
      <div>
        <AppBar
          open={this.state.open}
          onOpen={() => this.setDrawer(true)}
          onClose={() => this.setDrawer(false)}
        />
        <Component {...this.props} />
      </div>
    )
  }
})
