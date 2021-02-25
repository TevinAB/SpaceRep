import React from 'react';
import { AppBar, Toolbar, Button, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../../../redux/actions/actionTypes';
import { EDIT, changeView } from '../subcomponents/viewTypes';

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
    marginRight: '15px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  searchBar: {
    height: '37px',
    width: '100%',
    borderRadius: '7px',
  },
  addItem: {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    textTransform: 'capitalize',
  },
  logOut: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    textTransform: 'capitalize',
    marginLeft: '15px',
  },
}));

function NavBar() {
  const classes = useStyle();
  const username = useSelector((state) => state.auth.user.username);
  const dispatch = useDispatch();

  const userDisplay = (
    <Box classes={{ root: classes.userDisplay }}>
      <i className='far fa-user-circle' style={{ fontSize: '24px' }}></i>
      <span style={{ paddingLeft: '10px', fontSize: '16px' }}>{username}</span>
    </Box>
  );

  const addItem = (
    <Button
      className={`${classes.addItem}`}
      variant='outlined'
      onClick={(e) => {
        e.preventDefault();
        changeView(dispatch, EDIT);
      }}
    >
      Add Item
    </Button>
  );

  const buttonContainer = (
    <div
      style={{
        display: 'flex',
        flexShrink: 0,
        marginLeft: '15px',
        justifyContent: 'space-between',
      }}
    >
      {addItem}
      <Button
        className={`${classes.logOut}`}
        variant='outlined'
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: LOGOUT });
        }}
      >
        Log out
      </Button>
    </div>
  );

  return (
    <div>
      <AppBar classes={{ root: classes.appBar }}>
        <Toolbar>
          <Container component='nav' classes={{ root: classes.navContainer }}>
            {userDisplay}
            {buttonContainer}
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
