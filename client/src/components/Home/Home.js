import React from 'react';
import NavBar from './subcomponents/NavBar';
import Panel from './subcomponents/Panel';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Feed from './subcomponents/Feed';
import Edit from './subcomponents/Edit';
import { useSelector } from 'react-redux';

const useStyle = makeStyles((theme) => ({
  wrapperContainer: {
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyle();
  const topics = useSelector((state) => state.auth.user.topics);

  return (
    <Box classes={{ root: classes.wrapperContainer }}>
      <NavBar />
      <Panel type='Topics' collection={topics} />
      {true ? <Feed /> : <Edit />}
      <Panel type='View' collection={['Oldest', 'Newest', 'All items']} />
    </Box>
  );
}

export default Home;
