import React, { Component } from 'react'
import Layout from '../components/Layout'
// components
import GetStartedContainer from '../components/GetStartedContainer'
import HowItWorks from '../components/HowItWorks'

class Index extends Component {
  render() {
    return (
      <Layout>
        <div>
          <GetStartedContainer />
          <HowItWorks />
        </div>
      </Layout>
    )
  }
}

export default Index;
