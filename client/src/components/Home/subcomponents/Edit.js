import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    maxWidth: '820px',
    width: '64.0625%',
    height: 'calc(100vh - 64px)',
    maxHeight: 'calc(100vh - 64px)',
    marginTop: '64px',
    overflow: 'auto',
  },
  titleBox: {
    padding: '12px 0px 0px',
    marginBottom: '25px',
  },
  title: {
    fontSize: '1.125rem',
    textAlign: 'center',
  },
  addItemContainer: {
    minWidth: '155px',
    width: '100%',
    maxWidth: '580px',
  },
  addItem: {
    height: '37px',
    width: '100%',
    borderRadius: '7px',
  },
  selectTopic: {
    height: '37px',
  },
  selectTopicContainer: {
    marginTop: '25px',
  },
  container: {
    height: 'calc(100vh - 64px)',
    border: `1px solid ${theme.palette.grey[300]}`,
  },
}));

function Edit() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState('');
  const classes = useStyle();

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onTopicChange = (e) => setTopic(e.target.value);

  const title = (
    <Box classes={{ root: classes.titleBox }}>
      <Typography classes={{ root: classes.title }}>Add New Item</Typography>
    </Box>
  );

  const addItemTF = (
    <Box classes={{ root: classes.addItemContainer }}>
      <TextField
        fullWidth
        placeholder='Add question'
        variant='outlined'
        InputProps={{
          classes: { root: classes.addItem },
        }}
      />
    </Box>
  );

  const selectTopic = (
    <Box classes={{ root: classes.selectTopicContainer }}>
      <Select
        id='select-topic'
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        onChange={onTopicChange}
        value={topic}
        fullWidth
        variant='outlined'
        className={classes.selectTopic}
      >
        {/*Map over the topics when available*/}
        <MenuItem value='Git'>Git</MenuItem>
        <MenuItem value='Python'>Python</MenuItem>
      </Select>
    </Box>
  );

  return (
    <Box classes={{ root: classes.wrapper }}>
      <Container classes={{ root: classes.container }} maxWidth='sm'>
        {title}
        {addItemTF}
        {selectTopic}
      </Container>
    </Box>
  );
}

export default Edit;
