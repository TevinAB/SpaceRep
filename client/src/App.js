import './App.css';
import Welcome from './components/Welcome/Welcome';
import { CssBaseline, Container, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Nunito", sans-serif',
  },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Welcome />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
