import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// components
import Button from '../Button'

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'var(--beige)',
    height: '610px',
    color: 'var(--main-text-color)',
    fontFamily: 'Lato',
    [theme.breakpoints.down('sm')]: {
      height: '580px',
      flexDirection: 'column-reverse'
    },
  },
  dish1: {
    height: '342px',
    width: '372px',
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      height: '161px',
      width: '176px',
      alignSelf: 'flex-start',
    },
    [theme.breakpoints.up('sm')]: {
      height: '232px',
      width: '262px',
    },
    [theme.breakpoints.up('md')]: {
      height: '302px',
      width: '322px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '342px',
      width: '372px',
    },
  },
  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  dish2: {
    height: '294px',
    width: '371px',
    alignSelf: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      height: '142px',
      width: '183px',
      alignSelf: 'flex-end',
    },
    [theme.breakpoints.up('sm')]: {
      height: '194px',
      width: '251px',
    },
    [theme.breakpoints.up('md')]: {
      height: '254px',
      width: '321px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '294px',
      width: '371px',
    },
  },
  topMessage: {
    display: 'flex',
    fontSize: '32px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      fontSize: '1.5em',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5em',
    },
  },
  title: {
    marginTop: '0px',
    marginBottom: '20px',
    fontSize: '4.3em',
    textAlign: 'center',
    lineHeight: '0.8',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.3em',
    },
  },
  button: {
    width: '160px',
    height: '40px'
  }
})

const GetStartedContainer = ({classes}) => (
  <div className={classes.container}>
    <img className={classes.dish1} src="static/images/dish-1.png" alt="Dish 1" />
    <div className={classes.centerContent}>
      <div className={classes.topMessage}>Eat Better. Feel Better.</div>
      <h1 className={classes.title}>Healthy Meals <br/>Delivered</h1>
      <Button className={classes.button} variant="contained" color="secondary" onClick={() => console.log('Get Started')}>
        Get Started
      </Button>
    </div>
    <img className={classes.dish2} src="static/images/dish-2.png" alt="Dish 2" />
  </div>
)

GetStartedContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(GetStartedContainer)
