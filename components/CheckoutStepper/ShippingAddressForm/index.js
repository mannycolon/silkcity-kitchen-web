import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

const states = [
  "Alaska",
  "Alabama",
  "Arkansas",
  "American Samoa",
  "Arizona",
  "California",
  "Colorado",
  "Connecticut",
  "District of Columbia",
  "Delaware",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Iowa",
  "Idaho",
  "Illinois",
  "Indiana",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Massachusetts",
  "Maryland",
  "Maine",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Montana",
  "North Carolina",
  " North Dakota",
  "Nebraska",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Virgin Islands",
  "Vermont",
  "Washington",
  "Wisconsin",
  "West Virginia",
  "Wyoming"
]

const styles = (theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  flex1: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px 0px',
    }
  },
  flex2: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px 20px',
    }
  },
  textField: {

  },
  sideBySide: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItemFormControl: {
    marginTop: '16px',
    marginBottom: '8px',
    width: '96%',
    marginRight: '10px',
  }
})

const ShippingAddressForm = ({
  classes,
  firstName,
  lastName,
  email,
  number,
  streetAddress,
  addressLine2,
  city,
  state,
  zipCode,
  validateAttributes,
  handleChange,
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.flex1}>
        <FormControl>
          <TextField
            id="outlined-first-name"
            label="First name"
            className={classes.textField}
            value={firstName}
            onBlur={() => validateAttributes()}
            onChange={handleChange('firstName')}
            autoComplete="given-name"
            margin="normal"
            variant="outlined"
            // error={firstNameError ? true : false}
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-last-name"
            label="Last name"
            className={classes.textField}
            value={lastName}
            onBlur={() => validateAttributes()}
            onChange={handleChange('lastName')}
            autoComplete="family-name"
            margin="normal"
            variant="outlined"
            // error={lastNameError ? true : false}
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            value={email}
            type="email"
            onBlur={() => validateAttributes()}
            onChange={handleChange('email')}
            autoComplete="email"
            margin="normal"
            variant="outlined"
            // error={emailError ? true : false}
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-number"
            label="Mobile number"
            value={number}
            onBlur={() => validateAttributes()}
            onChange={handleChange('number')}
            autoComplete="tel"
            type="tel"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            // error={numberError ? true : false}
            required
          />
        </FormControl>
      </div>
      <div className={classes.flex2}>
        <FormControl>
          <TextField
            id="outlined-street-address"
            label="Street address"
            className={classes.textField}
            value={streetAddress}
            onBlur={() => validateAttributes()}
            onChange={handleChange('streetAddress')}
            autoComplete="address-line1"
            margin="normal"
            variant="outlined"
            // error={firstNameError ? true : false}
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-address-line-2"
            label="Apt, suite, etc (optional)"
            className={classes.textField}
            value={addressLine2}
            onBlur={() => validateAttributes()}
            onChange={handleChange('addressLine2')}
            autoComplete="address-line2"
            margin="normal"
            variant="outlined"
            // error={lastNameError ? true : false}
          />
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-city-input"
            label="City"
            className={classes.textField}
            value={city}
            onBlur={() => validateAttributes()}
            onChange={handleChange('city')}
            autoComplete="address-level2"
            margin="normal"
            variant="outlined"
            // error={emailError ? true : false}
            required
          />
        </FormControl>
        <div className={classes.sideBySide}>
          <FormControl variant="outlined" className={classes.menuItemFormControl} required autoComplete="address-level1">
            <InputLabel htmlFor="outlined-state-simple">
              State
            </InputLabel>
            <Select
              native
              value={state}
              onChange={handleChange('state')}
              input={
                <OutlinedInput
                  id="outlined-state-simple"
                  name="state"
                  labelWidth={55}
                />
              }
            >
              <option value=""/>
              {
                states.map((state, index) => <option key={index} value={state}>{state}</option>)
              }
            </Select>
          </FormControl>
          <FormControl>
            <TextField
              id="outlined-zip-code"
              label="ZIP Code"
              className={classes.smTextField}
              value={zipCode}
              onBlur={() => validateAttributes()}
              onChange={handleChange('zipCode')}
              autoComplete="postal-code"
              margin="normal"
              variant="outlined"
              required
            />
          </FormControl>
        </div>
      </div>
    </div>
  )
}

ShippingAddressForm.propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  addressLine2: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  validateAttributes: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(ShippingAddressForm)
