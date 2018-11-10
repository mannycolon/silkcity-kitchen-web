import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// core components
import EmptyCartAlert from '../EmptyCartAlert'
import CartItem from './CartItem'
import PriceBreakdown from './PriceBreakdown'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '30px',
    minHeight: '400px',
    color: 'var(--main-text-color)',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 12px',
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      margin: '12px'
    },
  },
  content: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
  }
})

const ShoppingCart = ({
  classes,
  items
}) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Your Cart</h1>
      <div>
        {
          items.length > 0 ?
          <div className={classes.content}>
            <div className={classes.cartItems}>
              <CartItem/>
              <CartItem/>
            </div>
            <PriceBreakdown/>
          </div>
          :
          <EmptyCartAlert/>
        }
      </div>
    </div>
  )
}

ShoppingCart.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
}

ShoppingCart.defaultProps = {
  items: [
    {
      title: '',
      description: '',
      image: '',
      price: ''
    },
    {
      title: '',
      description: '',
      image: '',
      price: ''
    }
  ]
}

export default withStyles(styles)(ShoppingCart)
