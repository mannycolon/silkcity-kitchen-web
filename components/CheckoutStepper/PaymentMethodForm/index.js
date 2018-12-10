import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import { BraintreeHostedFields } from 'braintree-web-react'

import './index.scss'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingcontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  dropInRoot: {
    width: '100%',
    height: '100%',
  },
  formRoot: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  flex1: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px 0px',
    }
  },
  flex2: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px 20px',
    }
  },
})

class PaymentMethodForm extends Component {
  state = {
    clientToken: null
  }

  instance

  async componentDidMount() {
    try {
      // Get a client token for authorization from your server
      const response = await axios.get('http://localhost:8000/api/braintree/v1/getToken')
      const clientToken = response.data.clientToken

      this.setState({ clientToken })
    } catch (err) {
      console.error(err)
    }
  }

  async buy() {
    try {
      // Send the nonce to your server
      const { nonce } = await this.instance.tokenize()

      const response = await axios.post(
        'http://localhost:8000/api/braintree/v1/sandbox',
        { paymentMethodNonce: nonce }
      )

      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { classes } = this.props

    if (!this.state.clientToken) {
      return (
        <div className={classes.loadingcontainer}>
          <h1>Loading...</h1>
        </div>
      )
    } else {
      return (
        <div className={classes.container}>
          <BraintreeHostedFields
            className={classes.dropInRoot}
            options={{ authorization: this.state.clientToken }}
            onInstance={(instance) => (this.instance = instance)}
          >
            <form className={classes.formRoot}>
              <div className={classes.flex1}>
                <label className="hosted-fields--label">Card number*</label>
                <div id="card-number" className="hosted-field"></div>

                <label className="hosted-fields--label">Expiration date*</label>
                <div id="expiration-date" className="hosted-field"></div>
              </div>
              <div className={classes.flex2}>
                <label className="hosted-fields--label">CVV*</label>
                <div id="cvv" className="hosted-field"></div>

                <label className="hosted-fields--label">Zip code*</label>
                <div id="postal-code" className="hosted-field"></div>
              </div>
            </form>
          </BraintreeHostedFields>
          <button className="submit" onClick={this.buy.bind(this)}>Submit</button>
        </div>
      )
    }
  }
}

PaymentMethodForm.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
}

export default withStyles(styles)(PaymentMethodForm)
