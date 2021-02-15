import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Box,
  Typography,
  Collapse,
  Badge,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  questionBox: {
    padding: '0px 17px',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  titleBox: {
    paddingTop: '12px',
  },
  detailBox: {
    paddingBottom: '2px',
  },
  editButton: {
    fontSize: '18px',
    color: '#938DF2',
    marginRight: '5px',
  },
  leftDetails: {
    display: 'flex',
    alignItems: 'center',
  },
  badge: {
    position: 'relative',
    transform: 'none',
    marginRight: '5px',
  },
}));

function FeedItem({ question, answer }) {
  const classes = useStyle();

  const questionBox = (
    <Box classes={{ root: classes.questionBox }}>
      <Box classes={{ root: classes.titleBox }}>
        <Typography>{question}</Typography>
      </Box>
      <Box classes={{ root: classes.detailBox }}>
        <Box classes={{ root: classes.leftDetails }}>
          <IconButton classes={{ root: classes.editButton }}>
            <i className='far fa-edit'></i>
          </IconButton>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              classes={{ badge: classes.badge }}
              badgeContent={27}
              color='error'
            ></Badge>
            <Typography>Days left</Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
  return <Box>{questionBox}</Box>;
}
export default FeedItem;
