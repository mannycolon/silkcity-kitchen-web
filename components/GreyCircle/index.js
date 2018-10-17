import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '230px',
    height: '230px',
    backgroundColor: 'var(--beige)',
    borderRadius: '50%',
    [theme.breakpoints.down('md')]: {
      width: '210px',
      height: '210px',
    },
  }
})

const GreyCircle = ({ classes, children }) => (
  <div className={classes.container}>
    {children}
  </div>
)

GreyCircle.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(GreyCircle)
