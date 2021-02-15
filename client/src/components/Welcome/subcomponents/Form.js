import React, { useState } from 'react';
import {
  Typography,
  TextField,
  InputAdornment,
  Box,
  Button,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const marginBottom = '1.5rem';
const useStyle = makeStyles((theme) => ({
  container: {
    width: '75%',
  },
  textField: {
    borderRadius: '27px',
    height: '3rem',
    paddingLeft: '20px',
    marginBottom,
    color: '#444040',
  },
  labelStyle: {
    left: '5px',
  },
  textBoxContainer: {
    marginBottom,
  },
  buttonStyle: {
    borderRadius: '27px',
    height: '3rem',
    backgroundColor: theme.palette.primary.main,
    color: '#FCFCFC',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2rem',
    },
    textTransform: 'capitalize',
  },
  mainText: {
    fontSize: '2rem',
  },
  subText: {
    fontSize: '1rem',
  },
  forgotPassword: {
    paddingLeft: '20px',
    color: '#444040',
    position: 'absolute',
    top: '-14px',
  },
  signIn: {
    color: '#444040',
    position: 'absolute',
    top: '-14px',
    right: '20px',
    [theme.breakpoints.down('xs')]: {
      left: '20px',
      top: '14px',
    },
  },
}));

function Form({ type }) {
  const classes = useStyle();
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameComponent = createTextFieldComponent(classes, {
    name: 'username',
    label: 'Username',
    value: username,
    icon: 'fas fa-user',
    type: 'text',
    setter: setName,
  });

  const emailComponent = createTextFieldComponent(classes, {
    name: 'email',
    label: 'Email',
    value: email,
    icon: 'fas fa-envelope',
    type: 'email',
    setter: setEmail,
  });

  const passwordComponent = createTextFieldComponent(classes, {
    name: 'password',
    label: 'Password',
    value: password,
    icon: 'fas fa-lock',
    type: 'password',
    setter: setPassword,
  });

  const { mainText, subText, buttonText, rightLinkText } = setTexts(type);

  const forgotPassword = (
    <div style={{ position: 'relative', marginBottom }}>
      {/*Only visible for a login form */}
      {type === 'Login' ? (
        <Link
          classes={{ root: classes.forgotPassword }}
          href='#'
          underline='always'
        >
          Forgot Password?
        </Link>
      ) : null}

      {/*Link that's to the right of the form */}
      <Link classes={{ root: classes.signIn }} href='#' underline='always'>
        {rightLinkText}
      </Link>
    </div>
  );

  return (
    <Box classes={{ root: classes.container }}>
      <div className={classes.textBoxContainer}>
        <Typography classes={{ root: classes.mainText }} variant='h3'>
          {mainText}
        </Typography>
        <Typography classes={{ root: classes.subText }}>{subText}</Typography>
      </div>

      {/*Add on submit handler */}
      <form className={classes.form}>
        {type === 'Register' ? nameComponent : null}
        {emailComponent}

        {/*Becomes visible for any form type, except a password reset form*/}
        {type !== 'Reset' ? (
          <>
            {passwordComponent}
            {forgotPassword}
          </>
        ) : null}

        <Button
          classes={{ root: classes.buttonStyle }}
          fullWidth
          variant='contained'
        >
          {buttonText}
        </Button>
      </form>
    </Box>
  );
}

function setTexts(formType) {
  let mainText = '';
  let subText = '';
  let buttonText = '';
  let rightLinkText = '';

  switch (formType) {
    case 'Login':
      mainText = 'Welcome Back';
      subText = 'sign into your account';
      buttonText = 'Log In';
      rightLinkText = "Don't have an account? Sign up";
      break;
    case 'Register':
      mainText = 'Create Your Account';
      subText = 'and start today';
      buttonText = 'Create Account';
      rightLinkText = 'Already have an account? Sign in';
      break;
    case 'Reset':
      mainText = 'Reset Password';
      subText = '';
      buttonText = 'Reset Password';
      break;
    default:
      subText = '';
      buttonText = '';
      rightLinkText = '';
      break;
  }
  return { mainText, subText, buttonText, rightLinkText };
}

function createTextFieldComponent(classes, config) {
  return (
    <TextField
      id={config.name}
      name={config.name}
      type={config.type}
      label={config.label}
      variant='outlined'
      value={config.value}
      onChange={(e) => config.setter(e.target.value)}
      fullWidth
      required
      InputLabelProps={{ classes: { root: classes.labelStyle } }}
      InputProps={{
        classes: {
          root: classes.textField,
        },
        startAdornment: (
          <InputAdornment position='start'>
            <i className={config.icon}></i>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default Form;
