import React, { Component } from 'react'
import Layout from '../components/Layout'

class Index extends Component {
  render() {
    return (
      <Layout>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <h1>Home</h1>
        </div>
      </Layout>
    )
  }
}

export default Index;
