import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import { CssBaseline, Container, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import store from './redux/store';
import { loadUser } from './redux/actions/authActions';
import Home from './components/Home/Home';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Nunito", sans-serif',
  },
  palette: {
    primary: {
      main: '#9B009B',
      dark: '#750675',
    },
  },
});

function App() {
  //Attempt to load the user
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Provider store={store}>
            <Router>
              <Switch>
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              </Switch>
            </Router>
          </Provider>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
