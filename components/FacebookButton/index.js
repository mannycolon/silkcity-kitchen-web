import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Icon from 'react-simple-icons'
// core components
import Buttton from '../Button'

const styles = {
  fbButton: {
    backgroundColor: 'var(--facebook)',
    '&:hover': {
      backgroundColor: 'var(--dark-facebook)',
    },
    width: '300px',
    minHeight: '40px'
  },
  content: {
    width: '100%',
    textAlign: 'center',
    lineHeight: '21px',
  },
  icon: {
    float: 'left'
  }
}

const FacebookButton = ({ classes, onClick, text }) => (
  <Buttton parentClasses={{root:classes.fbButton}} variant="contained" color="primary" onClick={() => onClick()}>
    <div className={classes.content}>
      <Icon
        className={classes.icon}
        name='facebook'
        size={21}
        color="var(--white-color)"
      />
      <div>{text}</div>
    </div>
  </Buttton>
)

FacebookButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default withStyles(styles)(FacebookButton)
