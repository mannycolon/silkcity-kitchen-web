import React, { Component } from 'react'
// core components
import Layout from '../components/Layout'
import ShoppingCart from '../components/ShoppingCart'

class CartPage extends Component {
  render() {
    return (
      <Layout>
        <ShoppingCart />
      </Layout>
    )
  }
}

export default CartPage;
