import PropTypes from 'prop-types'
import Router from 'next/router'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
// core components
import Button from '../../Button'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: "350px",
    height: "320px",
    backgroundColor: "var(--white-color)",
    border: "1px solid #e0e0e0",
    borderRadius: "3px",
    padding: "20px",
    margin: '15px',
    boxShadow: '0 1px 3px 0 rgba(0,0,0,0.15)',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      margin: '10px 0px',
    },
  },
  box: {
    border: "1px solid #e0e0e0",
    borderRadius: "3px",
  },
  itemText: {
    fontWeight: 'bold'
  },
  button: {
    height: '40px',
    margin: '10px 0px 0px'
  }
})

const PriceBreakdown = ({
  classes,
  subtotal,
  shipping,
  tax,
  total,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <List component="nav">
          <ListItem>
            <ListItemText classes={{ primary: classes.itemText}} primary="Subtotal" />
            <div>{`$${subtotal}`}</div>
          </ListItem>
          <Divider />
          <ListItem divider>
            <ListItemText classes={{ primary: classes.itemText}} primary="Shipping" />
            <div>{`$${shipping}`}</div>
          </ListItem>
          <ListItem>
            <ListItemText classes={{ primary: classes.itemText}} primary="Tax" />
            <div>{`$${tax}`}</div>
          </ListItem>
          <Divider light />
          <ListItem>
            <ListItemText classes={{ primary: classes.itemText}} primary="Total" />
            <div>{`$${total}`}</div>
          </ListItem>
        </List>
      </div>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => Router.push('/checkout')}
        fullWidth>
        Start Checkout
      </Button>
    </div>
  )
}

PriceBreakdown.propTypes = {
  classes: PropTypes.object.isRequired,
  subtotal: PropTypes.string.isRequired,
  shipping: PropTypes.string.isRequired,
  tax: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
}

PriceBreakdown.defaultProps = {
  subtotal: "160.00",
  shipping: "10.00",
  tax: "10.60",
  total: "180.60",
}

export default withStyles(styles)(PriceBreakdown)
