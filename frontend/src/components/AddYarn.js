import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
} from '@material-ui/core';

const CREATE_YARN = gql`
mutation CreateYarn($maker: String!, $name: String!, $weight: String!, $colorway: String!, $notes: String!) {
    createYarn(input: { maker: $maker, name: $name, weight: $weight, colorway: $colorway, notes: $notes }) {
      yarn {
        id
        maker
        name
        weight
        colorway
        notes
      }
      errors
    }
  }
`;

class NewYarn extends React.Component {
  constructor() {
    super();
    this.state = {
      maker: '',
      name: '',
      weight: '',
      colorway: '',
      notes: '' ,
    };
  }

  onSubmit = (e, createYarn) => {
    e.preventDefault();
    createYarn({ variables: this.state });
    this.setState({
      maker: '',
      name: '',
      weight: '',
      colorway: '',
      notes: '',
    });
  };

  addMaker = event => {
    this.setState({maker: event.target.value});
  };

  addName = event => {
    this.setState({name: event.target.value});
  };

  addWeight = event => {
    this.setState({weight: event.target.value});
  };

  addColorway = event => {
    this.setState({colorway: event.target.value});
  };

  addNotes = event => {
    this.setState({notes: event.target.value});
  };

  render() {
    return (
      <div style={{padding: 10}}>
        <Mutation mutation={CREATE_YARN} update={this.props.onCreateYarn}>
          {createYarnMutation => (
            <form onSubmit={e => this.onSubmit(e, createYarnMutation)}>
              <FormControl>
                <InputLabel>Maker:</InputLabel>
                <Input value={this.state.designer} onChange={this.addMaker} />
              </FormControl>
              <FormControl>
                <InputLabel>Name:</InputLabel>
                <Input value={this.state.title} onChange={this.addName} />
              </FormControl>
              <FormControl>
                <InputLabel>Weight:</InputLabel>
                <Input value={this.state.weight} onChange={this.addWeight} />
              </FormControl>
              <FormControl>
                <InputLabel>Colorway:</InputLabel>
                <Input value={this.state.colorway} onChange={this.addColorway} />
              </FormControl>
              <FormControl>
                <InputLabel>Notes</InputLabel>
                <Input
                  value={this.state.notes}
                  onChange={this.addNotes}
                />
              </FormControl>
              <Button type="submit">Add Yarn</Button>
            </form>
          )}
        </Mutation>
      </div>
    );
  };
};

export default NewYarn;
