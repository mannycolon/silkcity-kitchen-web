import React, { Component } from 'react'
import Layout from '../components/Layout'
// components
import GetStartedContainer from '../components/GetStartedContainer'
import HowItWorks from '../components/HowItWorks'
import MealPlans from '../components/MealPlans'

class Index extends Component {
  render() {
    return (
      <Layout>
        <div>
          <GetStartedContainer />
          <HowItWorks />
          <MealPlans title="Meal Plans" />
        </div>
      </Layout>
    )
  }
}

export default Index;
