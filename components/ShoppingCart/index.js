import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// core components
import EmptyCartAlert from '../EmptyCartAlert'
import CartItem from './CartItem'
import PriceBreakdown from './PriceBreakdown'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '30px',
    minHeight: '400px',
    color: 'var(--main-text-color)',
  },
  content: {
    display: 'flex',
  }
}

const ShoppingCart = ({
  classes,
  items
}) => {
  return (
    <div className={classes.container}>
      <h1>Your Cart</h1>
      <div>
        {
          items.length > 0 ?
          <div className={classes.content}>
            <CartItem/>
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
