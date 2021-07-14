import { Container, CssBaseline, makeStyles } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import './App.css';
import Routes from './router/Route';

const muiTheme = createTheme({
  palette: {
    primary: {
     main: '#0F93FF'
   },
   secondary: {
     light: '#CCCCCC',
     main: '#06041F',
   },
   error: {
     light: '#FA720C',
     main: '#D9186D',
   },
  },
}, ptBR);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container component="article" maxWidth="md">
            <Routes /> 
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
