import React from 'react'

import withNav from '../enhancers/withNav'
import Overview from '../components/overview'

const Home = () => (
  <Overview />
)

export default withNav(Home)
