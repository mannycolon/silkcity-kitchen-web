import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SmartphoneIcon from 'svg-reacticons/icons/SmartphoneOutline'
import TruckIcon from 'svg-reacticons/icons/TruckOutline'
import MicrowaveIcon from 'svg-reacticons/icons/MicrowaveOutline'
// components
import GreyCircle from '../GreyCircle'

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    color: 'var(--main-text-color)',
    padding: '35px 45px 45px',
    [theme.breakpoints.down('md')]: {
      padding: '20px 20px 75px',
    },
  },
  title: {
    fontSize: '3em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
      margin: '10px'
    },
  },
  steps: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '25px',
    [theme.breakpoints.down('md')]: {
      margin: '5px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '25px',
    },
  },
  header: {
    fontSize: '1.5em',
    color: 'var(--main-text-color)',
  },
  description: {
    color: 'var(--description-text-color)',
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
      padding: '5px',
    },
  }
})

const Step = ({children, classes, header, description}) => (
  <div className={classes.stepContainer}>
    <GreyCircle>
      {children}
    </GreyCircle>
    <h3 className={classes.header}>{header}</h3>
    <div className={classes.description}>
      {description}
    </div>
  </div>
);

const HowItWorks = ({classes}) => (
  <div className={classes.container}>
    <h2 className={classes.title}>How it Works</h2>
    <div className={classes.steps}>
      <Step header="Order Your Meals" classes={classes} description="Choose a meal plan based on your health and fitness goals.">
        <SmartphoneIcon width={140} height={140} color="var(--primary-color)" />
      </Step>
      <Step header="Freshly Made & Delivered" classes={classes} description="Enjoy delicious ingredients delivered straight to your doorstep">
        <TruckIcon width={165} height={165} color="var(--primary-color)" />
      </Step>
      <Step header="Heat & Enjoy" classes={classes} description="Enjoy your delicious meal at your home, office, or on the go.">
        <MicrowaveIcon width={150} height={150} color="var(--primary-color)" />
      </Step>
    </div>
  </div>
)

HowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HowItWorks)
