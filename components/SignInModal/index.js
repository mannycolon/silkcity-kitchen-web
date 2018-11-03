import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/OutlinedInput'
import TextField from '@material-ui/core/TextField'
// core components
import GoogleButton from '../GoogleButton'
import FacebookButton from '../FacebookButton'
import Button from '../Button'
// helpers
import { validateEmail } from '../../lib/dataValidators'

const styles = (theme) => ({
  dialogRoot: {
    flex: '1'
  },
  dialog: {
    minHeight: '480px',
    minWidth: '500px',
  },
  title: {
    textAlign: 'center',
  },
  titleText: {
    color: 'var(--main-text-color)',
    fontSize: '1.5em'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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
    color: 'var(--description-text-color)',
    margin: '10px',
  },
  input: {
    width: '300px',
    height: '40px',
    margin: '10px',
    backgroundColor: 'var(--white-color)',
    borderColor: 'var(--main-text-color)',
    borderRadius: '4px',
    padding: '20px 0px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
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

    console.log(email, password)
    if (email && password) valid = true;

    if (!email || !validateEmail(email)) {
      console.log('validateEmail')
      this.setState({ emailErrorText: 'This field is required.' })
      valid = false;
    } else {
      this.setState({ emailErrorText: '' })
    }

    if (!password) {
      console.log('!password')
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
          <div className={classes.orEmail}>
            or with email
          </div>
          <FormControl error={this.state.emailErrorText ? true : false}>
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
              error
              onChange={(event) => this.validateEmailText(event.target.value.trim())}
            />
          </FormControl>
          <FormControl error={this.state.passwordErrorText ? true : false}>
            <TextField
              placeholder="Password"
              // classes={{
              //   root: classes.input,
              //   notchedOutline: classes.inputNotchedOutline,
              //   input: classes.innerInput,
              // }}
              type="password"
              autoComplete="password"
              inputProps={{
                'aria-label': 'password',
              }}
              labelWidth={100}
              notched={false}
              required
              variant="outlined"
              error={this.state.passwordErrorText ? true : false}
              onChange={(event) => this.validatePasswordText(event.target.value)}
            />
          </FormControl>
          <Button parentClasses={{root:classes.signInButton}} variant="contained" color="secondary" onClick={this.onSubmit}>
            Sign in
          </Button>
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
