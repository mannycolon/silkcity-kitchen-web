import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// components
import Button from '../Button'

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
    color: 'var(--main-text-color)',
    padding: '25px 45px 45px',
    backgroundColor: 'var(--beige)',
    [theme.breakpoints.down('md')]: {
      padding: '25px',
    },
  },
  title: {
    fontSize: '3em',
    marginTop: '0px',
    marginBottom: '15px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5em',
      margin: '10px'
    },
  },
  plansContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  },
  planCategoryContainer: {
    backgroundColor: 'var(--white-color)',
    padding: '35px',
    margin: '7.5px',
    boxShadow: '0 1px 3px 0 rgba(0,0,0,0.15)',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      padding: '15px',
    },
  },
  planHeader: {
    marginTop: '0px',
    marginBottom: '5px',
    fontSize: '1.7em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5em',
    },
  },
  subcategoriesContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row'
    },
  },
  subcategoryContainer: {
    margin: '15px 0px'
  },
  priceHeader: {
    fontSize: '1.5em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    },
  },
  description: {
    color: 'var(--description-text-color)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
  }
})


const PlanCategory =({classes, plan}) => (
  <div className={classes.planCategoryContainer}>
    <h2 className={classes.planHeader}>{plan.type.charAt(0).toUpperCase() + plan.type.substr(1)}</h2>
    <div className={classes.subcategoriesContainer}>
      {
        plan.options.map((option, index) =>
          <PlanSubCategory
            key={index}
            classes={classes}
            price={option.price}
            description={`${option.mealsPerDay} Meals a Day for ${option.weeks} weeks`}
          />
        )
      }
    </div>
  </div>
)

const PlanSubCategory = ({classes, price, description}) => (
  <div className={classes.subcategoryContainer}>
    <h2 className={classes.priceHeader}>${price}</h2>
    <p className={classes.description}>{description}</p>
    <Button variant="contained" color="secondary" onClick={() => console.log('PlanSubCategory')}>
      Choose
    </Button>
  </div>
)

const MealPlansComponent = ({ classes, title, plans }) => (
  <div className={classes.container}>
    <h1 className={classes.title}>{title}</h1>
    <div className={classes.plansContainer}>
      {
        plans.map((plan, index) =>
          <PlanCategory
            key={index}
            classes={classes}
            plan={plan}
          />
        )
      }
    </div>
  </div>
)

MealPlansComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  plans: PropTypes.array.isRequired,
}

MealPlansComponent.defaultProps = {
  plans: [
    {
      type: 'trimdown',
      options: [
        {
          mealsPerDay: '3',
          weeks: '2',
          price:'160.00'
        },
        {
          mealsPerDay: '2',
          weeks: '2',
          price:'120.00'
        }
      ]
    },
    {
      type: 'maintenance',
      options: [
        {
          mealsPerDay: '3',
          weeks: '2',
          price:'180.00'
        },
        {
          mealsPerDay: '2',
          weeks: '2',
          price:'140.00'
        }
      ]
    },
    {
      type: 'bodybuilding',
      options: [
        {
          mealsPerDay: '3',
          weeks: '2',
          price:'190.00'
        },
        {
          mealsPerDay: '2',
          weeks: '2',
          price:'160.00'
        }
      ]
    },
    {
      type: 'vegan',
      options: [
        {
          mealsPerDay: '3',
          weeks: '2',
          price:'230.00'
        },
        {
          mealsPerDay: '2',
          weeks: '2',
          price:'200.00'
        }
      ]
    }
  ]
}

export default withStyles(styles)(MealPlansComponent)
