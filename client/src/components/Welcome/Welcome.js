import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from './images/bg.png';
import Form from './subcomponents/Form';

const useStyle = makeStyles((theme) => ({
  welcome: {
    display: 'flex',
  },
  heroText: {
    fontSize: '4rem',
    marginBottom: '0.2rem',
  },
  heroSubText: {
    fontSize: '1.6rem',
    paddingBottom: '16px',
  },
  heroSection: {
    backgroundImage: `url(${BackgroundImage})`,
    width: '50%',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#F8F8F8',
    userSelect: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  formSection: {
    display: 'flex',
    width: '50%',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid #c4c4c48c',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      borderLeft: '1px solid #c4c4c48c',
      width: '90%',
      maxWidth: '600px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

function Welcome() {
  const classes = useStyle();
  return (
    <Box classes={{ root: classes.welcome }}>
      <Box classes={{ root: classes.heroSection }}>
        <Typography classes={{ root: classes.heroText }} variant='h2'>
          SpaceRep
        </Typography>
        <Typography classes={{ root: classes.heroSubText }}>
          The ultimate revision tool
        </Typography>
      </Box>
      <Box classes={{ root: classes.formSection }}>
        <Form type='Login' />
      </Box>
    </Box>
  );
}

export default Welcome;
