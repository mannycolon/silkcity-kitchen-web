import React, { Component } from 'react'
import Router from 'next/router'
// core components
import Layout from '../components/Layout'
import Button from '../components/Button'

class CartPage extends Component {
  render() {
    return (
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: '30px',minHeight: '400px' }}>
          <h1>Your Cart</h1>
          <p>
            Your cart is currently empty.
          </p>
          <Button variant="contained" color="secondary" onClick={() => Router.push('/meal-plans')}>
            Go To Meal Plans
          </Button>
        </div>
      </Layout>
    )
  }
}

export default CartPage;
