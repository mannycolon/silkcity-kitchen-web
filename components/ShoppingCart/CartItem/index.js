import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Trash from 'svg-reacticons/lib/TrashOutlined'

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    width: "620px",
    height: "200px",
    backgroundColor: "var(--white-color)",
    border: "1px solid #dbdbdb",
    borderRadius: "3px",
    padding: "15px 15px 20px",
    margin: '15px'
  },
  left: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    height: '100px',
    width: '100px',
  },
  center: {
    flex: 3,
    display: 'flex',
    flexDirection: "column",
  },
  title: {
    color: 'var(--main-text-color)',
    margin: '0px 0px 5px'
  },
  description: {
    color: 'var(--description-text-color)',
    fontSize: '1em',
    margin: '5px 0px'
  },
  right: {
    flex: 0.5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  price: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    color: 'var(--black-color)',
  },
  delete: {
    alignSelf: 'flex-end',
    cursor: 'pointer'
  }
}

const CartItem = ({
  classes
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <img className={classes.image} src="static/images/food-item.png" alt="Food icon" />
      </div>
      <div className={classes.center}>
        <h3 className={classes.title}>Trimdown Program</h3>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.
        </p>
      </div>
      <div className={classes.right}>
        <div className={classes.price}>
          $160.00
        </div>
        <div className={classes.delete}>
          <Trash size={30}/>
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CartItem)
