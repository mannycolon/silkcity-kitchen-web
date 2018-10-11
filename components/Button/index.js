import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  buttonContained: {
    color: 'var(--white-color)',
    margin: theme.spacing.unit,
    boxShadow: 'none',
    whiteSpace: 'nowrap',
  },
  buttonOutlined: {
    margin: theme.spacing.unit,
    whiteSpace: 'nowrap',
  },
})

const ButtonComponent = ({
  classes,
  children,
  variant,
  color,
  fullWidth,
  disabled,
  onClick,
  className
}) => {
  let buttonClassName = `${classes.buttonContained} ${className}`

  switch (variant) {
    case 'outlined':
      buttonClassName = classes.buttonOutlined
      break;
    case 'contained':
      buttonClassName = `${classes.buttonContained} ${className}`
      break;
    default:
      break;
  }

  return (
    <Button
      variant={variant}
      color={color}
      className={buttonClassName}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

ButtonComponent.defaultProps = {
  fullWidth: false,
  disabled: false,
}

export default withStyles(styles)(ButtonComponent)
