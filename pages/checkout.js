import React, { Component } from 'react'
// core components
import Layout from '../components/Layout'
import CheckoutStepper from '../components/CheckoutStepper'

class CheckoutPage extends Component {
  render() {
    return (
      <Layout>
        <CheckoutStepper/>
      </Layout>
    )
  }
}

export default CheckoutPage;
