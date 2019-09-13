import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Button, Grid, Container, Paper} from '@material-ui/core';

const YARNS_QUERY = gql`
  query {
    yarns {
      id
      maker
      name
      weight
      colorway
      notes
    }
  }
`;

const useStyles = makeStyles(theme => ({
  addBox: {
    paddingBottom: theme.spacing(4),
  },
  container: {
    paddingTop: theme.spacing(4),
  },
}));

function Stash() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box className={classes.addBox}>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="/add-yarn">
          Add Yarn
        </Button>
      </Box>
      <Query query={YARNS_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <div>Fetching..</div>;
          if (error) return <div>Error!</div>;
          return (
            <Grid container spacing={2}>
              {data.yarns.map(yarn => {
                return (
                  <Grid key={yarn.id} item>
                    <Paper>
                      <Link to="/">
                        {yarn.maker + ' ' + yarn.name}
                      </Link>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          );
        }}
      </Query>
    </Container>
  );
}
export default Stash;
