import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  container: {
    width: "350px",
    height: "320px",
    backgroundColor: "var(--white-color)",
    border: "1px solid #e0e0e0",
    borderRadius: "3px",
    padding: "15px",
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
