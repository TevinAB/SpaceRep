import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  TextField,
  InputAdornment,
  Container,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#FFFFFF',
    color: '#444040',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  userDisplay: {
    display: 'flex',
    alignItems: 'center',
  },
  searchBar: {
    height: '37px',
    width: '100%',
    borderRadius: '7px',
  },
}));

function NavBar() {
  const classes = useStyle();

  const userDisplay = (
    <Box classes={{ root: classes.userDisplay }}>
      <i class='far fa-user-circle' style={{ fontSize: '24px' }}></i>
      <span style={{ paddingLeft: '10px', fontSize: '16px' }}>
        Tevin Banton
      </span>
    </Box>
  );

  const buttonContainer = (
    <div style={{ flexShrink: 0 }}>
      <Button variant='outlined'>Add Item</Button>
      <Button variant='outlined'>Log out</Button>
    </div>
  );

  const searchBar = (
    <div
      style={{
        minWidth: '155px',
        width: '507px',
        maxWidth: '507px',
        flexShrink: 1,
      }}
    >
      <TextField
        style={{ width: '100%' }}
        placeholder='Search for items in the current topic...'
        variant='outlined'
        InputProps={{
          classes: { root: classes.searchBar },
          endAdornment: (
            <InputAdornment>
              <i class='fas fa-search'></i>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );

  return (
    <div>
      <AppBar classes={{ root: classes.appBar }}>
        <Toolbar>
          <Container classes={{ root: classes.navContainer }}>
            {userDisplay}
            {searchBar}
            {buttonContainer}
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
