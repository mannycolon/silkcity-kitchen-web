import PropTypes from 'prop-types'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import Icon from 'react-simple-icons'
// components
import Button from '../Button'

const styles = theme => ({
  container: {
    fontSize: '15px',
    padding: '44px 24px 8px',
    color: 'var(--white-color)',
    backgroundColor: 'var(--black-color)',
    "& a": {
      color: 'var(--white-color)',
      "&:hover": {
        color: "var(--primary-color)"
      }
    },
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  leftSide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  rightSideContent: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
  },
  sectionContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '15px'
    },
  },
  section: {
    margin: '0px 25px 10px 0px',
    [theme.breakpoints.down('sm')]: {
      margin: '0px',
    },
  },
  linkTdLeft: {
    padding: '0px 25px 4px 0px',
  },
  linkTdRight: {
    padding: '0px 0px 4px 0px',
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
    padding: '6px 12px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  newsletterTitle: {
    marginLeft: theme.spacing.unit,
  },
  subscribeButton: {
    height: '45px',
    width: '155px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  socialIcons: {
    marginBottom: '5px'
  },
  socialIcon: {
    margin: 10,
    cursor: 'pointer'
  },
  bottomLinksContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomLinkItem: {
    margin: '5px'
  },
  bottomLinks: {
    display: 'flex',
  },
  bottomEnd: {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px 0px 10px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  }
})

const Footer = ({classes, businessName, address, phoneNumber}) => {
  const {street, city, state, zipCode} = address;
  return (
    <div className={classes.container}>
      <footer className={classes.footerContainer}>
        <div className={classes.leftSide}>
          <div className={classes.sectionContainer}>
            <div className={classes.section}>
              <h3>{businessName}</h3>
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
              <h3>Delivery Schedule:</h3>
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
              <h3>Useful links:</h3>
              <table>
                <tbody>
                  <tr>
                    <td className={classes.linkTdLeft}>
                      <Link href="/">
                        <a title="Home">
                          <div className={classes.menuItem}>Home</div>
                        </a>
                      </Link>
                    </td>
                    <td className={classes.linkTdRight}>
                      <Link href="/meal-plans">
                        <a title="Meal Plans">
                          <div className={classes.menuItem}>Meal Plans</div>
                        </a>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.linkTdLeft}>
                      <Link href="/about">
                        <a title="About">
                          <div className={classes.menuItem}>About</div>
                        </a>
                      </Link>
                    </td>
                    <td className={classes.linkTdRight}>
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
        </div>
        <div className={classes.rightSide}>
          <div className={classes.rightSideContent}>
            <h3 className={classes.newsletterTitle}>Get our newsletter</h3>
            <div>
              <Input
                placeholder="Enter your email"
                className={classes.input}
                autoComplete="email"
                inputProps={{
                  'aria-label': 'email',
                }}
              />
              <Button className={classes.subscribeButton} variant="contained" color="primary" onClick={() => console.log('Subscribe')}>
                Subscribe
              </Button>
            </div>
            <div className={classes.socialIcons}>
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
        </div>
      </footer>
      <div className={classes.bottomLinksContainer}>
        <div className={classes.bottomLinks}>
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
      <div className={classes.bottomEnd}>
        <div className={classes.bottomLinkItem}>© 2018 Silkcity Kitchen</div>
        <div className={classes.bottomLinkItem}>
          Powered by &nbsp;<a href="https://fornixsystems.com" target="_blank" rel='noopener noreferrer'>Fornix Systems</a>
        </div>
      </div>
    </div>
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
