import React, { Component } from 'react'
import Layout from '../components/Layout'
import MealPlans from '../components/MealPlans'

class MealPlansPage extends Component {
  render() {
    return (
      <Layout>
        <MealPlans title="Choose a Meal Plan" />
      </Layout>
    )
  }
}

export default MealPlansPage;
