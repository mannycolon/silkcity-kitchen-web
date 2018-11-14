import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import DialogContent from '@material-ui/core/DialogContent'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
// core components
import GoogleButton from '../../GoogleButton'
import FacebookButton from '../../FacebookButton'
import Button from '../../Button'

const styles = (theme) => ({
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
    margin: '5px',
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
        width: '77px',
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
  fullnameContainer: {
    display: 'flex',
    justContent: 'space-between',
    alignItems: 'center'
  },
  smTextField: {
    width: '140px',
    margin: '10px',
  },
  textField: {
    width: '300px',
    margin: '10px',
  },
  signInButton: {
    width: '300px',
    height: '40px',
  },
  terms: {
    width: '320px',
    textAlign: 'center',
    color: 'var(--description-text-color)',
    lineHeight: '140%',
    color: '#4D4D4D',
    fontSize: '0.8125rem'
  },
  smError: {
    width: '140px',
    marginTop: '0px',
    textAlign: 'center',
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


const SignUpContent = ({
  classes,
  onSubmit,
  firstName,
  lastName,
  email,
  number,
  password,
  showPassword,
  switchLoginScreen,
  signUpWithFacebook,
  signUpWithGoogle,
  firstNameError,
  lastNameError,
  emailError,
  numberError,
  passwordError,
  handleNameChange,
  handleLastNameChange,
  handleEmailChange,
  handleNumberChange,
  handlePasswordChange,
  handleClickShowPassword,
  validateAttributes,
}) => (
  <DialogContent classes={{ root: classes.content}}>
    <div className={classes.contentText}>
      <div className={classes.description}>
        Already have an account?
      </div>&nbsp;
      <div className={classes.signUp} onClick={() => switchLoginScreen('signIn')}>
        Sign in
      </div>
    </div>
    <FacebookButton onClick={() => signUpWithFacebook()} text="Continue with Facebook"/>
    <GoogleButton onClick={() => signUpWithGoogle()} text="Continue with Google"/>
    <p className={classes.orEmail}>
      <span>or continue with email</span>
    </p>
    <div className={classes.fullnameContainer}>
      <FormControl error={firstNameError ? true : false}>
        <TextField
          id="outlined-first-name"
          label="First name"
          className={classes.smTextField}
          value={firstName}
          onBlur={() => validateAttributes()}
          onChange={handleNameChange('firstName')}
          autoComplete="given-name"
          margin="normal"
          variant="outlined"
          error={firstNameError ? true : false}
          required
        />
        <FormHelperText classes={{ root: classes.smError }} id="component-error-text">
          {firstNameError}
        </FormHelperText>
      </FormControl>
      <FormControl error={lastNameError ? true : false}>
        <TextField
          id="outlined-last-name"
          label="Last name"
          className={classes.smTextField}
          value={lastName}
          onBlur={() => validateAttributes()}
          onChange={handleLastNameChange('lastName')}
          autoComplete="family-name"
          margin="normal"
          variant="outlined"
          error={lastNameError ? true : false}
          required
        />
        <FormHelperText classes={{ root: classes.smError }} id="component-error-text">
          {lastNameError}
        </FormHelperText>
      </FormControl>
    </div>
    <FormControl error={emailError ? true : false}>
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        value={email}
        type="email"
        onBlur={() => validateAttributes()}
        onChange={handleEmailChange('email')}
        autoComplete="email"
        margin="normal"
        variant="outlined"
        error={emailError ? true : false}
        required
      />
      <FormHelperText classes={{ root: classes.smError }} id="component-error-text">
        {emailError}
      </FormHelperText>
    </FormControl>
    <FormControl error={numberError ? true : false}>
      <TextField
        id="outlined-number"
        label="Mobile number"
        value={number}
        onBlur={() => validateAttributes()}
        onChange={handleNumberChange('number')}
        autoComplete="tel"
        type="tel"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        error={numberError ? true : false}
        required
      />
      <FormHelperText classes={{ root: classes.smError }} id="component-error-text">
        {numberError}
      </FormHelperText>
    </FormControl>
    <FormControl error={passwordError ? true : false}>
      <TextField
        id="outlined-adornment-password"
        className={classes.textField}
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        label="Password"
        value={password}
        onBlur={() => validateAttributes()}
        onChange={handlePasswordChange('password')}
        autoComplete="new-password"
        error={passwordError ? true : false}
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText classes={{ root: classes.smError }} id="component-error-text">
        {passwordError}
      </FormHelperText>
    </FormControl>
    <p className={classes.terms}>
      By clicking Sign up, Continue with Facebook, or Continue with Google, you agree to our&nbsp;
      <Link href="/terms-and-conditions"><a>Terms and Conditions</a></Link>&nbsp;and&nbsp;
      <Link href="/privacy-policy"><a>Privacy Statement</a></Link>.
    </p>
    <Button parentClasses={{root:classes.signInButton}} variant="contained" color="primary" onClick={onSubmit}>
      Sign up
    </Button>
  </DialogContent>
)

SignUpContent.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
  signUpWithFacebook: PropTypes.func.isRequired,
  signUpWithGoogle: PropTypes.func.isRequired,
  switchLoginScreen: PropTypes.func.isRequired,
  firstNameError: PropTypes.string.isRequired,
  lastNameError: PropTypes.string.isRequired,
  emailError: PropTypes.string.isRequired,
  numberError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  handleLastNameChange: PropTypes.func.isRequired,
  handleLastNameChange: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleClickShowPassword: PropTypes.func.isRequired,
  validateAttributes: PropTypes.func.isRequired,
}

export default withStyles(styles)(SignUpContent)
