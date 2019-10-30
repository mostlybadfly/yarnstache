import React from 'react';
import { Card, CardContent, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Yarn(props) {

  const yarn = props.location.state.yarn

  return (
    <Container>
      <Card style={{display: 'inline-block'}}>
        <CardContent>
          <Typography variant="h5">Maker: {yarn.maker}</Typography>
          <Typography variant="h4">Base: {yarn.name}</Typography>
          <Typography>Weight: {yarn.weight}</Typography>
          <Typography>Colorway: {yarn.colorway}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Yarn;
