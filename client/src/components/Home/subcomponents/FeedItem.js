import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Box, Typography, Collapse } from '@material-ui/core';
import { EDIT, changeView } from '../subcomponents/viewTypes';
import { setEditItem } from '../../../redux/actions/itemActions';

const useStyle = makeStyles((theme) => ({
  questionBox: {
    padding: '0px 17px',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  answerBox: {
    padding: '12px 17px',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  titleBox: {
    paddingTop: '12px',
  },
  detailBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '2px',
    width: '100%',
  },
  editButton: {
    fontSize: '18px',
    color: '#938DF2',
    marginRight: '0px',
  },
  leftDetails: {
    display: 'flex',
    alignItems: 'center',
  },
  rightDetails: {
    justifySelf: 'flex-end',
  },
  faded: {
    color: theme.palette.grey[500],
  },
}));

function FeedItem({ question, answer, itemId }) {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  const dispatch = useDispatch();

  const onClick = (e) => setOpen(!open);

  const questionBox = (
    <Box classes={{ root: classes.questionBox }} onClick={onClick}>
      <Box classes={{ root: classes.titleBox }}>
        <Typography variant='h6'>{question}</Typography>
      </Box>
      <Box classes={{ root: classes.detailBox }}>
        <Box classes={{ root: classes.leftDetails }}>
          <IconButton
            classes={{ root: classes.editButton }}
            onClick={(e) => {
              e.preventDefault();
              changeView(dispatch, EDIT);
              dispatch(setEditItem(itemId));
            }}
          >
            <i className='far fa-edit'> Edit</i>
          </IconButton>
        </Box>
        <Box classes={{ root: classes.rightDetails }}>
          <Typography classes={{ root: classes.faded }} variant='caption'>
            Added: Feb 8. 2021
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  const answerBox = (
    <Collapse in={open}>
      <Box classes={{ root: classes.answerBox }}>
        <Typography dangerouslySetInnerHTML={{ __html: answer }} />
      </Box>
    </Collapse>
  );

  return (
    <Box>
      {questionBox}
      {answerBox}
    </Box>
  );
}
export default FeedItem;
