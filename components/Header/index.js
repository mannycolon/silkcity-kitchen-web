import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Router from 'next/router'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import MenuIcon from '@material-ui/icons/Menu'
// core components
import MenuDrawer from '../MenuDrawer'
import Button from '../Button'
import LoginModal from '../LoginModal'

const styles = theme => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0,0,0,.0975)',
  },
  toolbarContent: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: 'var(--main-text-color)',
    textDecoration: 'none',
    userSelect: 'none',
    cursor: 'pointer'
  },
  leftSide: {
    display: 'flex',
    alignItems: 'center',
  },
  rightSide: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '60px',
    width: '65px',
    [theme.breakpoints.down('md')]: {
      height: '50px',
      width: '55px',
    },
  },
  menuItems: {
    display: 'flex',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('md')]: {
      marginLeft: '30px'
    },
  },
  menuItem: {
    color: 'var(--main-text-color)',
    paddingRight: '16px',
    paddingLeft: '16px',
    cursor: 'pointer',
    "&:hover": {
      color: "var(--primary-color)"
    }
  },
  badge: {
    top: 1,
    right: -15,
    color: 'var(--white-color)',
    border: '2px solid var(--white-color)',
  },
  shoppingCartIcon: {
    color: 'var(--main-text-color)'
  }
})

class Header extends Component {
  state = {
    isDrawerVisible: false,
    loginType: '',
    loginModalOpen: false,
  }

  toggleDrawer = (open) => this.setState({ isDrawerVisible: open })

  openSignInModal = () => this.setState({ loginModalOpen: true, loginType: 'signIn' })

  openSignUpModal = () => this.setState({ loginModalOpen: true, loginType: 'signUp' })

  closeLoginModal = () => this.setState({ loginModalOpen: false, loginType: '' })

  render() {
    const { classes } = this.props
    const badgeCount = 0

    return (
      <AppBar position="static" classes={{ root: classes.appBar }}>
        <Toolbar classes={{ root: classes.toolbarContent }}>
          <Hidden smUp>
            <IconButton color="inherit" aria-label="Menu" onClick={() => this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <div className={classes.leftSide}>
            <Link href="/" passHref>
              <a>
                <img className={classes.logo} src="static/images/Silkcity kitchen Logo.png" alt="Silkcity kitchen Logo" />
              </a>
            </Link>
            <Hidden xsDown>
              <div className={classes.menuItems}>
                <Link href="/">
                  <a title="Home">
                    <div className={classes.menuItem}>Home</div>
                  </a>
                </Link>
                <Link href="/meal-plans">
                  <a title="Meal Plans">
                    <div className={classes.menuItem}>Meal Plans</div>
                  </a>
                </Link>
                <Link href="/about">
                  <a title="About">
                    <div className={classes.menuItem}>About</div>
                  </a>
                </Link>
                <Link href="/support">
                  <a title="Support">
                    <div className={classes.menuItem}>Support</div>
                  </a>
                </Link>
              </div>
            </Hidden>
          </div>
          <div className={classes.rightSide}>
            <Hidden xsDown>
              <Button variant="outlined" color="secondary" onClick={() => this.openSignInModal()}>
                Sign In
              </Button>
              <Button variant="contained" color="secondary" onClick={() => this.openSignUpModal()}>
                Sign Up
              </Button>
            </Hidden>
            <IconButton aria-label="Shopping Cart" onClick={() => Router.push('/cart')}>
              <Badge badgeContent={badgeCount} color="secondary" classes={{ badge: classes.badge }}>
                <ShoppingCartIcon classes={{root: classes.shoppingCartIcon }} />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
        <MenuDrawer isDrawerVisible={this.state.isDrawerVisible} toggleDrawer={this.toggleDrawer} />
        <LoginModal
          open={this.state.loginModalOpen}
          loginType={this.state.loginType}
          closeModal={this.closeLoginModal}
          openSignInModal={this.openSignInModal}
          openSignUpModal={this.openSignUpModal}
        />
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)

