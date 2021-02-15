import React from 'react';
import NavBar from './subcomponents/NavBar';
import Panel from './subcomponents/Panel';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Feed from './subcomponents/Feed';

const useStyle = makeStyles((theme) => ({
  wrapperContainer: {
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyle();
  return (
    <Box classes={{ root: classes.wrapperContainer }}>
      <NavBar />
      <Panel />
      <Feed />
      <Panel />
    </Box>
  );
}

export default Home;
