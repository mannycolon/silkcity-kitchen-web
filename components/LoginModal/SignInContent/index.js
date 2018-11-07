import Link from 'next/link'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import DialogContent from '@material-ui/core/DialogContent'
import Input from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
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

const SignInContent = ({
  classes,
  emailError,
  onEmailChange,
  validateEmailText,
  passwordError,
  validatePasswordText,
  onSubmit,
  signInWithFacebook,
  signInWithGoogle,
  switchLoginScreen,
}) => {
  return (
    <DialogContent classes={{ root: classes.content}}>
      <div className={classes.contentText}>
        <div className={classes.description}>
          New to Silkcity Kitchen?
        </div>&nbsp;
        <div className={classes.signUp} onClick={() => switchLoginScreen('signUp')}>
          Sign up
        </div>
      </div>
      <FacebookButton onClick={() => signInWithFacebook()} text="Sign in with Facebook"/>
      <GoogleButton onClick={() => signInWithGoogle()} text="Sign in with Google"/>
      <p className={classes.orEmail}>
        <span>or with email</span>
      </p>
      <FormControl classes={{root: classes.formControl}} error={emailError ? true : false}>
        <Input
          placeholder="Email"
          classes={{
            root: classes.input,
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
          onChange={(event) => onEmailChange(event.target.value.trim())}
          onBlur={(event) => validateEmailText(event.target.value.trim())}
        />
        {
          emailError &&
          <FormHelperText classes={{root: classes.error}} id="component-error-text">
            {emailError}
          </FormHelperText>
        }
      </FormControl>
      <FormControl classes={{root: classes.formControl}} error={passwordError ? true : false}>
        <Input
          placeholder="Password"
          classes={{
            root: classes.input,
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
          onChange={(event) => validatePasswordText(event.target.value)}
        />
        {
          passwordError &&
          <FormHelperText classes={{root: classes.error}} id="component-error-text">
            {passwordError}
          </FormHelperText>
        }
      </FormControl>
      <Button parentClasses={{root:classes.signInButton}} variant="contained" color="primary" onClick={onSubmit}>
        Sign in
      </Button>
      <div className={classes.forgotPassword}>
        <Link href="/password-reset"><a>Forgot your password?</a></Link>
      </div>
    </DialogContent>
  )
}

SignInContent.propTypes = {
  classes: PropTypes.object.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  emailError: PropTypes.string.isRequired,
  validateEmailText: PropTypes.func.isRequired,
  passwordError: PropTypes.string.isRequired,
  validatePasswordText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  signInWithFacebook: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  switchLoginScreen: PropTypes.func.isRequired,
}

export default withStyles(styles)(SignInContent)
