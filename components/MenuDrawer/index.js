import PropTypes from 'prop-types'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import HomeIcon from '@material-ui/icons/Home'
import LocalDiningIcon from '@material-ui/icons/LocalDining'
import PeopleIcon from '@material-ui/icons/People'
import ContactIcon from '@material-ui/icons/Email'
import Icon from 'react-simple-icons'
// core components
import Button from '../Button'

const styles = theme => ({
  drawerPaper: {
    height: '100%',
    width: '200px'
  },
  toolbar: theme.mixins.toolbar,
  topDrawerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'var(--white)',
    paddingLeft: '5px',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
  closeIcon: {
    color: '#000000'
  },
  listItem: {
    display: 'flex',
    color: '#000000',
    textDecoration: 'none',
  }
})

const MenuDrawer = ({classes, isDrawerVisible, toggleDrawer}) => {
  return (
    <Drawer
      anchor="left"
      open={isDrawerVisible}
      onClose={() => toggleDrawer(false)}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={`${classes.toolbar} ${classes.topDrawerContainer}`}>
        <IconButton className={classes.closeIcon} onClick={() => toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </div>
      <Button variant="outlined" color="secondary" onClick={() => toggleDrawer(false)}>
        Sign In
      </Button>
      <Button variant="contained" color="secondary" onClick={() => toggleDrawer(false)}>
        Sign Up
      </Button>
      <List component="nav">
        <ListItem button>
          <Link href="/">
            <div className={classes.listItem}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </div>
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href="/meal-plans">
            <div className={classes.listItem}>
              <ListItemIcon>
                <LocalDiningIcon />
              </ListItemIcon>
              <ListItemText primary="Meal Plans" />
            </div>
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href="/about">
            <div className={classes.listItem}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </div>
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href="/support">
            <div className={classes.listItem}>
              <ListItemIcon>
                <ContactIcon />
              </ListItemIcon>
              <ListItemText primary="Support" />
            </div>
          </Link>
        </ListItem>
        <Divider />
        <ListItem style={{ display: 'flex', justifyContent: 'center', paddingBottom: '0px' }}>
          <ListItemText primary="CONNECT WITH US" style={{ padding: '0px', textAlign: 'center' }} />
        </ListItem>
        <ListItem style={{ display: 'flex', justifyContent: 'center', paddingTop: '0px' }}>
          <a href="https://twitter.com/silkcitykitchen/" target="_blank" rel='noopener noreferrer'>
            <Icon
              name='twitter'
              size={25}
              color="#000000"
              style={{ margin: 5, cursor: 'pointer' }}
            />
          </a>
          <a href="https://www.instagram.com/silkcity_kitchen/" target="_blank" rel='noopener noreferrer'>
            <Icon
              name='instagram'
              size={25}
              color="#000000"
              style={{ margin: 5, cursor: 'pointer' }}
            />
          </a>
          <a href="https://facebook.com/Silkcitykitchen/" target="_blank" rel='noopener noreferrer'>
            <Icon
              name='facebook'
              size={25}
              color="#000000"
              style={{ margin: 5, cursor: 'pointer' }}
            />
          </a>
        </ListItem>
      </List>
    </Drawer>
  )
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MenuDrawer)
