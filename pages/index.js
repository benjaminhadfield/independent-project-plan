import React from 'react'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import withNav from '../enhancers/withNav'
import Overview from '../components/overview'

const Home = () => (
  <Overview />
)

export default withNav(Home)
