import PropTypes from 'prop-types'
import Router from 'next/router'
import { withStyles } from '@material-ui/core/styles'
// core components
import Button from '../Button'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
}

const EmptyCartAlert = ({
  classes
}) => {
  return (
    <div className={classes.container}>
      <p>
        Your cart is currently empty.
      </p>
      <Button variant="contained" color="primary" onClick={() => Router.push('/meal-plans')}>
        Go To Meal Plans
      </Button>
    </div>
  )
}

EmptyCartAlert.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(EmptyCartAlert)
