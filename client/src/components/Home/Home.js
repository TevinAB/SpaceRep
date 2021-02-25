import React, { useEffect } from 'react';
import NavBar from './subcomponents/NavBar';
import Panel from './subcomponents/Panel';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Feed from './subcomponents/Feed';
import Edit from './subcomponents/Edit';
import { useSelector, useDispatch } from 'react-redux';
import { HOME, EDIT } from './subcomponents/viewTypes';
import { loadItems } from '../../redux/actions/itemActions';

const useStyle = makeStyles((theme) => ({
  wrapperContainer: {
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.auth.user.topics);
  const view = useSelector((state) => state.mainView.view);
  let componentToRender = <Feed />;

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

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
      <Panel type='View' collection={['Oldest', 'Newest']} />
    </Box>
  );
}

export default Home;
