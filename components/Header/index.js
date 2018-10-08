import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Hidden from '@material-ui/core/Hidden'

import MenuIcon from '@material-ui/icons/Menu'
// burger
{/* <div className='burger-menu'>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </div> */}

const styles = theme => ({
  toolbarContent: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: '#000000',
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
  menuItems: {
    display: 'flex',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('md')]: {
      marginLeft: '42px'
    },
  },
  menuItem: {
    color: '#47525E',
    paddingRight: '16px',
    paddingLeft: '16px',
    cursor: 'pointer',
  },
  button: {
    color: '#ffffff',
    margin: theme.spacing.unit,
    boxShadow: 'none',
    whiteSpace: 'nowrap',
  },
  buttonOutlined: {
    margin: theme.spacing.unit,
    whiteSpace: 'nowrap',
  },
  badge: {
    top: 1,
    right: -15,
    color: '#ffffff',
    border: '2px solid #ffffff',
  },
  shoppingCartIcon: {
    color: '#47525E'
  }
})

class Header extends Component {
  state = {
    isDrawerVisible: false,
  }

  toggleDrawer = (open) => () => {
    this.setState({ isDrawerVisible: open })
  }

  render() {
    const { classes } = this.props
    const badgeCount = 0

    return (
      <AppBar position="static">
        <Toolbar classes={{ root: classes.toolbarContent }}>
          <Hidden smUp>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <div className={classes.leftSide}>
            <Link href="/" passHref>
              <a>
                <img src="static/images/Silkcity kitchen Logo.png" alt="Silkcity kitchen Logo" height="70px" width="75px"/>
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
              <Button variant="outlined" color="secondary" className={classes.buttonOutlined}>
                Sign In
              </Button>
              <Button variant="contained" color="secondary" className={classes.button}>
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
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)

