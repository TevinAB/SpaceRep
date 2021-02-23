import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { HOME, changeView } from '../subcomponents/viewTypes';
import {
  addItem,
  setEditItem,
  updateItem,
  removeItem,
} from '../../../redux/actions/itemActions';

const useStyle = makeStyles((theme) => ({
  wrapper: {
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
  container: {
    height: 'calc(100vh - 64px)',
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
  },
  back: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    textTransform: 'capitalize',
  },
  deleteButton: {
    backgroundColor: theme.palette.error.main,
    borderColor: theme.palette.error.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
    textTransform: 'capitalize',
  },
  buttonContainer: {
    height: '34px',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '25px',
  },
}));

function Edit() {
  const { editId, items } = useSelector((state) => {
    return {
      editId: state.items.itemToEdit,
      items: state.items.items,
    };
  });
  const itemEditing = getItemFromId(editId, items);
  const [topicOpen, setTopicOpen] = useState(false);
  const [topic, setTopic] = useState(itemEditing ? itemEditing.topic : '');
  const [question, setQuestion] = useState(
    itemEditing ? itemEditing.title : ''
  );
  const [answer, setAnswer] = useState(itemEditing ? itemEditing.answer : '');

  const classes = useStyle();
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    changeView(dispatch, HOME);
    dispatch(setEditItem(null));
  };

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
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
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
        open={topicOpen}
        onOpen={() => setTopicOpen(true)}
        onClose={() => setTopicOpen(false)}
        onChange={(e) => setTopic(e.target.value)}
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

  const editor = (
    <Box classes={{ root: classes.editorContainer }}>
      <ReactQuill theme='snow' value={answer} onChange={setAnswer} />
    </Box>
  );

  const save = (
    <Button
      className={`${classes.save}`}
      variant='outlined'
      onClick={(e) => {
        if (itemEditing) {
          dispatch(
            updateItem({
              title: question,
              answer,
              topic,
              userId: itemEditing.userId,
              _id: itemEditing._id,
            })
          );
        } else {
          dispatch(addItem({ title: question, answer, topic }));
        }
        dispatch(setEditItem(null));
      }}
    >
      Save Item
    </Button>
  );

  const deleteButton = (
    <Button
      className={`${classes.deleteButton}`}
      variant='outlined'
      onClick={(e) => {
        e.preventDefault();
        dispatch(removeItem(itemEditing._id));
      }}
    >
      Delete
    </Button>
  );

  const back = (
    <Button
      className={`${classes.back}`}
      variant='outlined'
      onClick={clickHandler}
    >
      Back
    </Button>
  );

  const buttonContainer = (
    <Box classes={{ root: classes.buttonContainer }}>
      {back}
      {itemEditing ? deleteButton : null}
      {save}
    </Box>
  );

  return (
    <Box classes={{ root: classes.wrapper }}>
      <Container classes={{ root: classes.container }} maxWidth='sm'>
        {title}
        {addItemTF}
        {selectTopic}
        {editor}
        {buttonContainer}
      </Container>
    </Box>
  );
}

function getItemFromId(id, items) {
  if (!items || !id) return null;

  const match = items.filter((item) => item._id === id);
  if (match.length) return match[0];

  return null;
}

export default Edit;
