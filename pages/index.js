import React from 'react'

import withNav from '../enhancers/withNav'
import Overview from '../components/overview'
import WorkPackage from '../components/workPackage'

const Home = () => (
  <div>
    <Overview />
    <WorkPackage />
  </div>
)

export default withNav(Home)
