import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import FeedItem from './FeedItem';

const useStyle = makeStyles((theme) => ({
  container: {
    maxWidth: '820px',
    width: '64.0625%',
    height: 'calc(100vh - 64px)',
    maxHeight: 'calc(100vh - 64px)',
    marginTop: '64px',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

function Feed() {
  const classes = useStyle();
  const items = useSelector((state) => state.items.items) || [];

  return (
    <Box component='main' classes={{ root: classes.container }}>
      {items.map((item) => {
        return (
          <FeedItem
            key={item._id}
            question={item.title}
            answer={item.answer}
            itemId={item._id}
          />
        );
      })}
    </Box>
  );
}

export default Feed;
