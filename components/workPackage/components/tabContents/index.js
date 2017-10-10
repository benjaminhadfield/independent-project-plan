import React from 'react'
import PropTypes from 'prop-types'

const TabContents = ({ show, ...props }) => {
  const el = (
    <div {...props} />
  )
  return show ? el : null
}

TabContents.propTypes = {
  show: PropTypes.bool.isRequired
}

export default TabContents
