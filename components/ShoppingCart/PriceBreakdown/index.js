import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  container: {
    width: "300px",
    height: "320px",
    backgroundColor: "var(--white-color)",
    border: "1px solid #8492A6",
    borderRadius: "5px",
    margin: '15px'
  }
}

const PriceBreakdown = ({
  classes
}) => {
  return (
    <div className={classes.container}>

    </div>
  )
}

PriceBreakdown.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PriceBreakdown)
