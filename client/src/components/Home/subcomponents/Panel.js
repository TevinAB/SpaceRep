import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, Box, Typography } from '@material-ui/core';
import PanelItem from './PanelItem';

const useStyle = makeStyles((theme) => ({
  container: {
    maxWidth: '230px',
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
    width: '17.96875%',
    height: '100vh',
    paddingTop: '64px',
  },
  searchBar: {
    height: '37px',
    width: '100%',
    borderRadius: '7px',
  },
  searchContainer: {
    minWidth: '193px',
    maxWidth: '193px',
  },
  topicBox: {
    padding: '15px 19px 27px',
  },
  titleBox: {
    padding: '12px 0px 0px',
  },
  title: {
    fontSize: '1.125rem',
    textAlign: 'center',
  },
}));

function Panel() {
  const classes = useStyle();

  const title = (
    <Box classes={{ root: classes.titleBox }}>
      <Typography classes={{ root: classes.title }}>Topics</Typography>
    </Box>
  );

  const addTopic = (
    <Box classes={{ root: classes.topicBox }}>
      <TextField
        fullWidth
        placeholder='Add topic...'
        variant='outlined'
        InputProps={{
          classes: { root: classes.searchBar },
          endAdornment: (
            <InputAdornment>
              <i className='fas fa-plus-circle'></i>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );

  const items = (
    <Box>
      <PanelItem type='topics' text='Git' />
      <PanelItem type='topics' text='Python' />
    </Box>
  );

  return (
    <Box classes={{ root: classes.container }}>
      {title}
      {addTopic}
      {items}
    </Box>
  );
}

export default Panel;
