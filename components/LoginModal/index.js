import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
// core components
import SignInContent from './SignInContent';
// helpers
import { validateEmail } from '../../lib/dataValidators'

const styles = (theme) => ({
  dialogRoot: {
    flex: '1',
    "& a": {
      color: 'var(--description-text-color)',
      "&:hover": {
        color: "var(--main-text-color)"
      }
    },
  },
  dialogPaper: {
    minHeight: '480px',
    minWidth: '500px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '0px',
      minWidth: '0px',
    },
  },
  closeButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%'
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 24px 15px'
  },
  titleText: {
    color: 'var(--main-text-color)',
    fontSize: '1.5em'
  },
})

class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailErrorText: '',
      passwordErrorText: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validateAttributes = this.validateAttributes.bind(this);
    this.validateEmailText = this.validateEmailText.bind(this);
    this.validatePasswordText = this.validatePasswordText.bind(this);
  }

  validateEmailText(email) {
    this.setState({ email })
    if(!validateEmail(email)) {
      this.setState({ emailErrorText: 'Please enter a valid email address.' })
    } else {
      this.setState({ emailErrorText: '' })
    }
  }

  validatePasswordText(password) {
    this.setState({ password })
    if (!password) {
      this.setState({ passwordErrorText: 'This field is required.' })
    } else {
      this.setState({ passwordErrorText: '' })
    }
  }

  onSubmit() {
    const { name, email } = this.state;

    if (this.validateAttributes()) {
      //submit Form
    }
  }

  validateAttributes() {
    const { email, password } = this.state;
    let valid = false;

    if (email && password) valid = true;

    if (!email || !validateEmail(email)) {
      this.setState({ emailErrorText: 'This field is required.' })
      valid = false;
    } else {
      this.setState({ emailErrorText: '' })
    }

    if (!password) {
      valid = false;
      this.setState({ passwordErrorText: 'This field is required.' })
    } else {
      this.setState({ passwordErrorText: '' })
    }

    return valid;
  }

  render() {
    const { classes, fullScreen, open, closeModal, loginType, openSignInModal, openSignUpModal } = this.props

    return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={closeModal}
        aria-labelledby="responsive-dialog-title"
        scroll="body"
        classes={{ root: classes.dialogRoot, paper: classes.dialogPaper}}
      >
        <div className={classes.closeButtonContainer}>
          <IconButton onClick={closeModal} aria-label="Close">
            <CloseIcon/>
          </IconButton>
        </div>
        <DialogTitle id="responsive-dialog-title" classes={{ root: classes.title}}>
          <div className={classes.titleText}>
            {
              loginType === 'signIn' ? "Sign in" : "Sign up"
            }
          </div>
        </DialogTitle>
        {
          loginType === 'signIn' ?
            <SignInContent
              emailErrorText={this.state.emailErrorText}
              passwordErrorText={this.state.passwordErrorText}
              onSubmit={this.onSubmit}
              validateEmailText={this.validateEmailText}
              validatePasswordText={this.validatePasswordText}
              openSignUpModal={openSignUpModal}
              signInWithFacebook={() => console.log('signInWithFacebook')}
              signInWithGoogle={() => console.log('signInWithGoogle')}
            />
          :
          <div>Sign Up Content</div>
        }
      </Dialog>
    )
  }
}

LoginModal.propTypes = {
  classes: PropTypes.object.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  openSignInModal: PropTypes.func.isRequired,
  openSignUpModal: PropTypes.func.isRequired,
  openModal: PropTypes.func,
}

export default withMobileDialog()(withStyles(styles)(LoginModal))
