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
import SignUpContent from './SignUpContent';
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

const INITIAL_STATE = {
  signIn: {
    email: '',
    password: '',
  },
  signUp: {
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    password: '',
  },
  firstNameError: '',
  lastNameError: '',
  emailError: '',
  passwordError: '',
  numberError: '',
  showPassword: false
}

class LoginModal extends Component {
  state = {
    signIn: {
      email: '',
      password: '',
    },
    signUp: {
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      password: '',
    },
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
    numberError: '',
    showPassword: false
  }

  onEmailChange = email => event => {
    this.setState({
      signIn: {
        ...this.state.signIn,
        [email]: event.target.value,
      }
    })
  }

  validateEmailText = (email) => {
    this.setState({ signIn: { ...this.state.signIn, email }})

    if(!validateEmail(email)) {
      this.setState({ emailError: 'Please enter a valid email address.' })
    } else {
      this.setState({ emailError: '' })
    }
  }

  validatePasswordText = (password) => {
    this.setState({ signIn: { ...this.state.signIn, password }})

    if (!password) {
      this.setState({ passwordError: 'This field is required.' })
    } else {
      this.setState({ passwordError: '' })
    }
  }

  handleSignUpNameChange = firstName => event => {
    this.setState({
      signUp: {
        ...this.state.signUp,
        [firstName]: event.target.value,
      }
    })
  }

  handleSignUpLastNameChange = lastName => event => {
    this.setState({
      signUp: {
        ...this.state.signUp,
        [lastName]: event.target.value,
      }
    })
  }

  handleSignUpEmailChange = email => event => {
    this.setState({
      signUp: {
        ...this.state.signUp,
        [email]: event.target.value,
      }
    })
  }

  handleSignUpNumberChange = number => event => {
    this.setState({
      signUp: {
        ...this.state.signUp,
        [number]: event.target.value,
      }
    })
  }

  handleSignUpPasswordChange = password => event => {
    this.setState({
      signUp: {
        ...this.state.signUp,
        [password]: event.target.value,
      }
    })
  }

  handleSignUpClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }))
  }

  validateAttributes = () => {
    const { loginType } = this.props
    const { firstName, lastName, email, number, password } = this.state[loginType];
    let valid = false;

    if (loginType === 'signIn') {
      valid = this.validateSignInItems(email, password)
    } else {
      valid = this.validateSignUpItems(firstName, lastName, email, number, password)
    }

    return valid;
  }

  validateSignInItems = (email, password) => {
    let valid = false;

    if (email && password) valid = true;

    if (!email || !validateEmail(email)) {
      this.setState({ emailError: 'This field is required.' })
      valid = false;
    } else {
      this.setState({ emailError: '' })
    }

    if (!password) {
      valid = false;
      this.setState({ passwordError: 'This field is required.' })
    } else {
      this.setState({ passwordError: '' })
    }

    return valid;
  }

  validateSignUpItems = (firstName, lastName, email, number, password) => {
    let valid = false;

    if (firstName && lastName && email && number && password) valid = true;

    if (!firstName) {
      console.log('firstNameError')
      valid = false;
      this.setState({ firstNameError: 'This field is required.' })
    } else {
      this.setState({ firstNameError: '' })
    }

    if (!lastName) {
      valid = false;
      this.setState({ lastNameError: 'This field is required.' })
    } else {
      this.setState({ lastNameError: '' })
    }

    if (!email || !validateEmail(email)) {
      this.setState({ emailError: 'This field is required.' })
      valid = false;
    } else {
      this.setState({ emailError: '' })
    }

    if (!number) {
      valid = false;
      this.setState({ numberError: 'This field is required.' })
    } else {
      this.setState({ numberError: '' })
    }

    if (!password) {
      valid = false;
      this.setState({ passwordError: 'This field is required.' })
    } else {
      this.setState({ passwordError: '' })
    }

    return valid;
  }

  screenTransition = (loginType) => {
    const { switchLoginScreen } = this.props

    this.setState({
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      passwordError: '',
      numberError: ''
    })
    switchLoginScreen(loginType)
  }

  onSubmit = () => {
    if (this.validateAttributes()) {
      //submit Form
    }
  }

  render() {
    const { classes, fullScreen, open, closeModal, loginType } = this.props

    return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => {
          this.setState(INITIAL_STATE)
          closeModal()
        }}
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
              onSubmit={this.onSubmit}
              switchLoginScreen={this.screenTransition}
              onEmailChange={this.onEmailChange}
              validateEmailText={this.validateEmailText}
              validatePasswordText={this.validatePasswordText}
              signInWithFacebook={() => console.log('signInWithFacebook')}
              signInWithGoogle={() => console.log('signInWithGoogle')}
              emailError={this.state.emailError}
              passwordError={this.state.passwordError}
            />
          :
            <SignUpContent
              onSubmit={this.onSubmit}
              switchLoginScreen={this.screenTransition}
              firstName={this.state.signUp.firstName}
              lastName={this.state.signUp.lastName}
              email={this.state.signUp.email}
              number={this.state.signUp.number}
              password={this.state.signUp.password}
              showPassword={this.state.showPassword}
              signUpWithFacebook={() => console.log('signUpWithFacebook')}
              signUpWithGoogle={() => console.log('signUpWithGoogle')}
              firstNameError={this.state.firstNameError}
              lastNameError={this.state.lastNameError}
              emailError={this.state.emailError}
              numberError={this.state.numberError}
              passwordError={this.state.passwordError}
              handleNameChange={this.handleSignUpNameChange}
              handleLastNameChange={this.handleSignUpLastNameChange}
              handleEmailChange={this.handleSignUpEmailChange}
              handleNumberChange={this.handleSignUpNumberChange}
              handlePasswordChange={this.handleSignUpPasswordChange}
              handleClickShowPassword={this.handleSignUpClickShowPassword}
              validateAttributes={this.validateAttributes}
            />
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
  switchLoginScreen: PropTypes.func.isRequired,
  openModal: PropTypes.func,
}

export default withMobileDialog()(withStyles(styles)(LoginModal))
