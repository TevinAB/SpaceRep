import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from './images/bg.png';
import Form from './subcomponents/Form';

const useStyle = makeStyles({
  welcome: {
    display: 'flex',
  },
  heroText: {
    fontSize: '4rem',
  },
  heroSubText: {
    fontSize: '1.6rem',
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
  },
});

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
      <Box>
        <Form />
      </Box>
    </Box>
  );
}

export default Welcome;
