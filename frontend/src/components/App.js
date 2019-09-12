import React from 'react';
import Stash from './Stash';
import AddYarn from './AddYarn';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {purple} from '@material-ui/core/colors';
import {blue} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {main: purple[600]},
    secondary: {main: blue[300]},
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                color="secondary"
                component={Link}
                to="/"
                variant="h6"
                className={classes.title}>
                YarnStache
              </Typography>
              <Button color="secondary" component={Link} to="/stash">
                My Stash
              </Button>
            </Toolbar>
          </AppBar>

          <Route exact path="/stash" component={Stash} />
          <Route path="/add-yarn" component={AddYarn} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
