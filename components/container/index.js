import React from 'react'

export default ({ children, ...props }) => (
  <div {...props}>
    {children}
    <style jsx>{`
      div {
        padding: 0 25px;
      }
    `}</style>
  </div>
)
