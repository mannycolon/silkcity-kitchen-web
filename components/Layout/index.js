import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Header from '../Header'
import Footer from '../Footer'

const styles = {
  layoutContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflowY: 'auto',
  },
  layoutcontent: {
    flex: 1,
  }
}


const Layout = ({children, classes}) => (
  <div className={classes.layoutContainer}>
    <Header/>
    <div className={classes.layoutcontent}>
      {children}
    </div>
    <Footer/>
  </div>
)

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout)
