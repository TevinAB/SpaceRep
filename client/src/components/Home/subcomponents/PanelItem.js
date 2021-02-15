import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Badge } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  container: {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    padding: '12px 0px 0px 30px',
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
      <Badge
        classes={{ badge: classes.badge }}
        badgeContent={99}
        max={99}
        color='error'
      >
        <Typography classes={{ root: classes.text }}>{text}</Typography>
      </Badge>
    </Box>
  );
}

export default PanelItem;
