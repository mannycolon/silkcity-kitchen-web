import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  container: {
    width: "600px",
    height: "200px",
    backgroundColor: "var(--white-color)",
    border: "1px solid #8492A6",
    borderRadius: "5px",
    margin: '15px'
  }
}

const CartItem = ({
  classes
}) => {
  return (
    <div className={classes.container}>

    </div>
  )
}

CartItem.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CartItem)
