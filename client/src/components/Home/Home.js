import React, { useEffect } from 'react';
import NavBar from './subcomponents/NavBar';
import Panel from './subcomponents/Panel';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Feed from './subcomponents/Feed';
import Edit from './subcomponents/Edit';
import { useSelector } from 'react-redux';
import { HOME, EDIT } from './subcomponents/viewTypes';

const useStyle = makeStyles((theme) => ({
  wrapperContainer: {
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyle();
  const topics = useSelector((state) => state.auth.user.topics);
  const view = useSelector((state) => state.mainView.view);
  let componentToRender = <Feed />;

  switch (view) {
    case HOME:
      componentToRender = <Feed />;
      break;

    case EDIT:
      componentToRender = <Edit />;
      break;

    default:
      componentToRender = <Feed />;
      break;
  }

  return (
    <Box classes={{ root: classes.wrapperContainer }}>
      <NavBar />
      <Panel type='Topics' collection={topics} />
      {componentToRender}
      <Panel type='View' collection={['Oldest', 'Newest', 'All items']} />
    </Box>
  );
}

export default Home;
