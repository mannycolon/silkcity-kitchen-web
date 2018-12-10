import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
// core components
import ShippingAddressForm from './ShippingAddressForm'
import PaymentMethodForm from './PaymentMethodForm'
import ReviewOrderContent from './ReviewOrderContent'

const styles = (theme) => ({
  root: {
    width: '90%',
    padding: '0px 0px',
    margin: 'auto',
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '0px 12px',
      marginBottom: '30px',
    },
  },
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: '12px'
    },
  },
  stepper: {
    padding: '35px',
    boxShadow: '0 1px 3px 0 rgba(0,0,0,0.15)',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      padding: '15px'
    },
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px 20px',
  },
  backButton: {
    color: 'var(--black-color)'
  },
  nextButton: {
    color: 'var(--white-color)',
    boxShadow: 'none'
  }
})

function getSteps() {
  return ['Enter Shipping Address', 'Enter Payment Method', 'Review Your Order']
}

function getStepContent(step, state, handleChange) {
  switch (step) {
    case 0:
      return (
        <ShippingAddressForm
          firstName={state.firstName}
          lastName={state.lastName}
          email={state.email}
          number={state.number}
          streetAddress={state.streetAddress}
          addressLine2={state.addressLine2}
          city={state.city}
          state={state.state}
          zipCode={state.zipCode}
          validateAttributes={() => console.log('')}
          handleChange={handleChange}
        />
      )
    case 1:
      return <PaymentMethodForm/>
    case 2:
      return <ReviewOrderContent/>
    default:
      return 'Unknown step'
  }
}

class CheckoutStepper extends React.Component {
  state = {
    activeStep: 0,
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    streetAddress: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }))
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }))
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    })
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  render() {
    const { classes } = this.props
    const steps = getSteps()
    const { activeStep } = this.state

    return (
      <div className={classes.root}>
        <h1 className={classes.title}>Checkout</h1>
        <Stepper activeStep={activeStep} orientation="vertical" classes={{ root: classes.stepper }}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <div>{getStepContent(index, this.state, this.handleChange)}</div>
                  <div className={classes.buttonsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.backButton}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.nextButton}
                      >
                        {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
      </div>
    )
  }
}

CheckoutStepper.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(CheckoutStepper)
