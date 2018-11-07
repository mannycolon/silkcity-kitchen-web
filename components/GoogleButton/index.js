import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GoogleIcon from 'svg-reacticons/lib/GoogleColored'
// core components
import Buttton from '../Button'

const styles = {
  googleButton: {
    backgroundColor: 'var(--google)',
    '&:hover': {
      backgroundColor: 'var(--dark-google)',
    },
    width: '300px',
    minHeight: '40px'
  },
  content: {
    width: '100%',
    textAlign: 'center',
    lineHeight: '23px',
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    float: 'left',
    backgroundColor: '#fff',
    borderRadius: '4px',
    height: '23px',
    width: '23px'
  },
  icon: {
  }
}

const GoogleButton = ({ classes, onClick, text }) => (
  <Buttton parentClasses={{root:classes.googleButton}} variant="contained" color="primary" onClick={() => onClick()}>
    <div className={classes.content}>
      <div className={classes.iconWrapper}>
        <GoogleIcon
          className={classes.icon}
          name='facebook'
          size={18}
        />
      </div>
      <div>{text}</div>
    </div>
  </Buttton>
)

GoogleButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default withStyles(styles)(GoogleButton)
