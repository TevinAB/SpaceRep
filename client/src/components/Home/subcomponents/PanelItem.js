import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  container: {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    padding: '12px 0px 0px 30px',
    overflow: 'hidden',
  },
  text: {
    fontSize: '16px',
  },
  badge: {
    right: '-12px',
    fontSize: '12px',
  },
}));

function PanelItem({ type, text }) {
  const classes = useStyle();

  return (
    <Box classes={{ root: classes.container }}>
      <Typography classes={{ root: classes.text }}>{text}</Typography>
    </Box>
  );
}

PanelItem.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PanelItem;
