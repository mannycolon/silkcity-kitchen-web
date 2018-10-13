import PropTypes from 'prop-types'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import Icon from 'react-simple-icons'
// components
import Button from '../Button'

const styles = theme => ({
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '15px',
    color: 'var(--white-color)',
    backgroundColor: 'var(--black-color)',
    height: '250px',
    padding: '44px 24px 24px',
    "& a": {
      color: 'var(--white-color)',
      "&:hover": {
        color: "var(--primary-color)"
      }
    }
  },
  leftSide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  sectionContainer: {
    display: 'flex'
  },
  section: {
    margin: '0px 25px 0px 0px'
  },
  links: {
    padding: '4px 0px',
  },
  input: {
    width: '238px',
    height: '45px',
    marginLeft: theme.spacing.unit,
    marginRight: '2px',
    backgroundColor: 'var(--white-color)',
    borderRadius: '4px',
    padding: '6px 12px'
  },
  newsletterTitle: {
    marginLeft: theme.spacing.unit,
    marginBottom: '8px'
  },
  subscribeButton: {
    height: '45px',
    width: '155px'
  },
  socialIcon: {
    margin: 10,
    cursor: 'pointer'
  },
  bottomLinks: {
    display: 'flex',
  },
  bottomLinkItem: {
    marginLeft: theme.spacing.unit,
    marginRight: '30px'
  }
})

const Footer = ({classes, businessName, address, phoneNumber}) => {
  const {street, city, state, zipCode} = address;
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.leftSide}>
        <div className={classes.sectionContainer}>
          <div className={classes.section}>
            <div>{businessName}</div><br/>
            <table>
              <tbody>
                <tr>
                  <td>{street}</td>
                </tr>
                <tr>
                  <td>{`${city} ${state} ${zipCode}`}</td>
                </tr>
                <tr>
                  <td>{phoneNumber}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={classes.section}>
            <div>Delivery Schedule:</div><br/>
            <table>
              <tbody>
                <tr>
                  <td>Sundays:</td>
                  <td>7:00pm - 10:30pm</td>
                </tr>
                <tr>
                  <td>Tuesdays:</td>
                  <td>7:00pm - 10:30pm</td>
                </tr>
                <tr>
                  <td>Wednesdays:</td>
                  <td>7:00pm - 10:30pm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={classes.section}>
            <table>
              <tbody>
                <tr>
                  <td className={classes.links}>
                    <Link href="/">
                      <a title="Home">
                        <div className={classes.menuItem}>Home</div>
                      </a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className={classes.links}>
                    <Link href="/meal-plans">
                      <a title="Meal Plans">
                        <div className={classes.menuItem}>Meal Plans</div>
                      </a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className={classes.links}>
                    <Link href="/about">
                      <a title="About">
                        <div className={classes.menuItem}>About</div>
                      </a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className={classes.links}>
                    <Link href="/support">
                      <a title="Support">
                        <div className={classes.menuItem}>Support</div>
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          Powered by <a href="https://fornixsystems.com" target="_blank" rel='noopener noreferrer'>Fornix Systems</a>
        </div>
      </div>
      <div className={classes.rightSide}>
        <div>
          <div className={classes.newsletterTitle}>Get our newsletter</div>
          <div>
            <Input
              placeholder="Enter your email"
              className={classes.input}
              autoComplete="email"
              inputProps={{
                'aria-label': 'email',
              }}
            />
            <Button className={classes.subscribeButton} variant="contained" color="secondary" onClick={() => console.log('Subscribe')}>
              Subscribe
            </Button>
          </div>
          <div>
            <a href="https://www.instagram.com/silkcity_kitchen/" target="_blank" rel='noopener noreferrer'>
              <Icon
                className={classes.socialIcon}
                name='instagram'
                size={18}
                color="var(--white-color)"
              />
            </a>
            <a href="https://facebook.com/Silkcitykitchen/" target="_blank" rel='noopener noreferrer'>
              <Icon
                className={classes.socialIcon}
                name='facebook'
                size={18}
                color="var(--white-color)"
              />
            </a>
            <a href="https://twitter.com/silkcitykitchen/" target="_blank" rel='noopener noreferrer'>
              <Icon
                className={classes.socialIcon}
                name='twitter'
                size={18}
                color="var(--white-color)"
              />
            </a>
          </div>
        </div>
        <div className={classes.bottomLinks}>
          <div className={classes.bottomLinkItem}>© 2018 Silkcity Kitchen</div>
          <Link href="/terms-and-conditions">
            <a title="Terms and Conditions">
              <div className={classes.bottomLinkItem}>Terms and Conditions</div>
            </a>
          </Link>
          <Link href="/privacy-policy">
            <a title="Privacy Policy">
              <div className={classes.bottomLinkItem}>Privacy Policy</div>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

Footer.defaultProps = {
  businessName: 'Silkcity Kitchen',
  address: {
    street: '56 Commerce st',
    city: 'Garfield',
    state: 'NJ',
    zipCode: '07026'
  },
  phoneNumber: '973-910-7121'
}

export default withStyles(styles)(Footer)
