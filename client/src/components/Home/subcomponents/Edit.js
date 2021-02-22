import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
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
  editorContainer: {
    marginTop: '25px',
  },
  save: {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    textTransform: 'capitalize',
    marginTop: '25px',
  },
  container: {
    height: 'calc(100vh - 64px)',
    overflow: 'auto',
    //border: `1px solid ${theme.palette.grey[300]}`,
  },
}));

function Edit() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState('');
  const [frequency, setFrequency] = useState('');
  const [answer, setAnswer] = useState('');
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

  const selectFrequency = (
    <Box classes={{ root: classes.selectTopicContainer }}>
      <Select
        id='select-frequency'
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
        <MenuItem value='Low'>Low</MenuItem>
        <MenuItem value='Med'>Med</MenuItem>
      </Select>
    </Box>
  );

  const editor = (
    <Box classes={{ root: classes.editorContainer }}>
      <ReactQuill theme='snow' value={answer} onChange={setAnswer} />
    </Box>
  );

  const save = (
    <Button className={`${classes.save}`} variant='outlined'>
      Save Item
    </Button>
  );

  return (
    <Box classes={{ root: classes.wrapper }}>
      <Container classes={{ root: classes.container }} maxWidth='sm'>
        {title}
        {addItemTF}
        {selectTopic}
        {editor}
        {selectFrequency}
        {save}
      </Container>
    </Box>
  );
}

export default Edit;
