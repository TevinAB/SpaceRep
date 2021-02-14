import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import { CssBaseline, Container, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Nunito", sans-serif',
  },
});

//Add router here
function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Welcome />
              </Route>
              <Route path='/home'>
                <Home />
              </Route>
            </Switch>
          </Router>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
