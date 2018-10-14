import React, { Component } from 'react'
import Layout from '../components/Layout'
// components
import GetStartedContainer from '../components/GetStartedContainer'

class Index extends Component {
  render() {
    return (
      <Layout>
        <div>
          <GetStartedContainer />
          <h1>Home</h1>
        </div>
      </Layout>
    )
  }
}

export default Index;
