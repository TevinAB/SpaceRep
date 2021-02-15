import React from 'react';
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
  },
}));

function Feed() {
  const classes = useStyle();
  return (
    <Box classes={{ root: classes.container }}>
      <FeedItem
        question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        answer='Egestas integer eget aliquet nibh praesent tristique magna. Velit laoreet id donec ultrices tincidunt. Arcu dui vivamus arcu felis bibendum ut tristique et'
      />
      <FeedItem
        question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        answer='Egestas integer eget aliquet nibh praesent tristique magna. Velit laoreet id donec ultrices tincidunt. Arcu dui vivamus arcu felis bibendum ut tristique et'
      />
      <FeedItem
        question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        answer='Egestas integer eget aliquet nibh praesent tristique magna. Velit laoreet id donec ultrices tincidunt. Arcu dui vivamus arcu felis bibendum ut tristique et'
      />
      <FeedItem
        question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        answer='Egestas integer eget aliquet nibh praesent tristique magna. Velit laoreet id donec ultrices tincidunt. Arcu dui vivamus arcu felis bibendum ut tristique et'
      />
      <FeedItem
        question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        answer='Egestas integer eget aliquet nibh praesent tristique magna. Velit laoreet id donec ultrices tincidunt. Arcu dui vivamus arcu felis bibendum ut tristique et'
      />
      <FeedItem
        question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        answer='Egestas integer eget aliquet nibh praesent tristique magna. Velit laoreet id donec ultrices tincidunt. Arcu dui vivamus arcu felis bibendum ut tristique et'
      />
      <FeedItem
        question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        answer='Egestas integer eget aliquet nibh praesent tristique magna. Velit laoreet id donec ultrices tincidunt. Arcu dui vivamus arcu felis bibendum ut tristique et'
      />
      <FeedItem
        question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        answer='Egestas integer eget aliquet nibh praesent tristique magna. Velit laoreet id donec ultrices tincidunt. Arcu dui vivamus arcu felis bibendum ut tristique et'
      />
      <FeedItem
        question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        answer='Egestas integer eget aliquet nibh praesent tristique magna. Velit laoreet id donec ultrices tincidunt. Arcu dui vivamus arcu felis bibendum ut tristique et'
      />
      <FeedItem
        question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        answer='Egestas integer eget aliquet nibh praesent tristique magna. Velit laoreet id donec ultrices tincidunt. Arcu dui vivamus arcu felis bibendum ut tristique et'
      />
      <FeedItem
        question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        answer='Egestas integer eget aliquet nibh praesent tristique magna. Velit laoreet id donec ultrices tincidunt. Arcu dui vivamus arcu felis bibendum ut tristique et'
      />
      <FeedItem
        question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        answer='Egestas integer eget aliquet nibh praesent tristique magna. Velit laoreet id donec ultrices tincidunt. Arcu dui vivamus arcu felis bibendum ut tristique et'
      />
      <FeedItem
        question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        answer='Egestas integer eget aliquet nibh praesent tristique magna. Velit laoreet id donec ultrices tincidunt. Arcu dui vivamus arcu felis bibendum ut tristique et'
      />
    </Box>
  );
}

export default Feed;
