import React, { Component } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Input from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
// core components
import GoogleButton from '../GoogleButton'
import FacebookButton from '../FacebookButton'
import Button from '../Button'
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
  dialog: {
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
    padding: '10px 24px 20px'
  },
  titleText: {
    color: 'var(--main-text-color)',
    fontSize: '1.5em'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 24px 48px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  contentText: {
    display: 'flex',
    margin: '10px 10px 15px',
  },
  description: {
    color: 'var(--description-text-color)'
  },
  signUp: {
    color: 'var(--primary-color)',
    cursor: 'pointer',
  },
  orEmail: {
    width: '300px',
    lineHeight: '0.2',
    textAlign: 'center',
    fontSize: '0.8125rem',
    color: 'var(--description-text-color)',
    "& span": {
      display: 'inline-block',
      position: 'relative',
      "&:before, &:after": {
        content: "' '",
        position: 'absolute',
        height: '1px',
        backgroundColor: '#CCCCCC',
        top: 0,
        width: '100px',
      }
    },
    "& span:before": {
      right: '100%',
      marginRight: '10px'
    },
    "& span:after": {
      left: '100%',
      marginLeft: '10px'
    }
  },
  formControl: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    width: '300px',
    height: '40px',
    margin: '10px',
    backgroundColor: 'var(--white-color)',
    borderColor: 'var(--main-text-color)',
    borderRadius: '4px',
    padding: '20px 0px',
  },
  inputNotchedOutline: {
    borderColor: 'var(--main-text-color)',
  },
  innerInput: {
    padding: '10px'
  },
  signInButton: {
    width: '300px',
    height: '40px',
  },
  error: {
    width: '300px',
    marginTop: '0px'
  },
  forgotPassword: {
    margin: '0px',
    color: 'var(--description-text-color)',
    fontSize: '1rem',
  }
})

class SignInModal extends Component {
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
    const { classes, fullScreen, open, closeModal } = this.props

    return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={closeModal}
        aria-labelledby="responsive-dialog-title"
        scroll="body"
        classes={{ root: classes.dialogRoot, paper: classes.dialog}}
      >
        <div className={classes.closeButtonContainer}>
          <IconButton onClick={closeModal} aria-label="Close">
            <CloseIcon/>
          </IconButton>
        </div>
        <DialogTitle id="responsive-dialog-title" classes={{ root: classes.title}}>
          <div className={classes.titleText}>Sign in</div>
        </DialogTitle>
        <DialogContent classes={{ root: classes.content}}>
          <div className={classes.contentText}>
            <div className={classes.description}>
              New to Silkcity Kitchen?
            </div>&nbsp;
            <div className={classes.signUp}>
              Sign up
            </div>
          </div>
          <FacebookButton onClick={() => console.log('GoogleButton')} text="Sign in with Facebook"/>
          <GoogleButton onClick={() => console.log('GoogleButton')} text="Sign in with Google"/>
          <p className={classes.orEmail}>
            <span>or with email</span>
          </p>
          <FormControl classes={{root: classes.formControl}} error={this.state.emailErrorText ? true : false}>
            <Input
              placeholder="Email"
              classes={{
                root: classes.input,
                notchedOutline: classes.inputNotchedOutline,
                input: classes.innerInput,
              }}
              type="email"
              autoComplete="email"
              inputProps={{
                'aria-label': 'email',
              }}
              labelWidth={100}
              notched={false}
              required
              onChange={(event) => this.validateEmailText(event.target.value.trim())}
            />
            {this.state.emailErrorText && <FormHelperText classes={{root: classes.error}} id="component-error-text">{this.state.emailErrorText}</FormHelperText>}
          </FormControl>
          <FormControl classes={{root: classes.formControl}} error={this.state.passwordErrorText ? true : false}>
            <Input
              placeholder="Password"
              classes={{
                root: classes.input,
                notchedOutline: classes.inputNotchedOutline,
                input: classes.innerInput,
              }}
              type="password"
              autoComplete="password"
              inputProps={{
                'aria-label': 'password',
              }}
              labelWidth={100}
              notched={false}
              required
              onChange={(event) => this.validatePasswordText(event.target.value)}
            />
            {this.state.passwordErrorText && <FormHelperText classes={{root: classes.error}} id="component-error-text">{this.state.passwordErrorText}</FormHelperText>}
          </FormControl>
          <Button parentClasses={{root:classes.signInButton}} variant="contained" color="secondary" onClick={this.onSubmit}>
            Sign in
          </Button>
          <div className={classes.forgotPassword}>
            <Link href="/password-reset"><a>Forgot your password?</a></Link>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
}

SignInModal.propTypes = {
  classes: PropTypes.object.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
}

export default withMobileDialog()(withStyles(styles)(SignInModal))
