import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
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
import SignInModal from '../SignInModal'

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
    signInModalOpen: false,
  }

  openModal = () => {
    this.setState({ signInModalOpen: true });
  };

  closeModal = () => {
    this.setState({ signInModalOpen: false });
  };

  toggleDrawer = (open) => () => {
    this.setState({ isDrawerVisible: open })
  }

  render() {
    const { classes } = this.props
    const badgeCount = 0

    return (
      <AppBar position="static" classes={{ root: classes.appBar }}>
        <Toolbar classes={{ root: classes.toolbarContent }}>
          <Hidden smUp>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
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
              <Button variant="outlined" color="secondary" onClick={() => this.openModal()}>
                Sign In
              </Button>
              <Button variant="contained" color="secondary" onClick={() => console.log('Sign Up')}>
                Sign Up
              </Button>
            </Hidden>
            <IconButton aria-label="Shopping Cart">
              <Badge badgeContent={badgeCount} color="secondary" classes={{ badge: classes.badge }}>
                <ShoppingCartIcon classes={{root: classes.shoppingCartIcon }} />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
        <MenuDrawer isDrawerVisible={this.state.isDrawerVisible} toggleDrawer={this.toggleDrawer} />
        <SignInModal open={this.state.signInModalOpen} closeModal={this.closeModal} openModal={this.openModal} />
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)

