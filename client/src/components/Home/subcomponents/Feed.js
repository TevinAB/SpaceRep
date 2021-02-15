import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import FeedItem from './FeedItem';

const useStyle = makeStyles((theme) => ({
  container: {
    maxWidth: '820px',
    width: '64.0625%',
    height: 'calc(100vh - 64px)',
    paddingTop: '64px',
  },
}));

function Feed() {
  const classes = useStyle();
  return (
    <Box classes={{ root: classes.container }}>
      <FeedItem question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
    </Box>
  );
}

export default Feed;
