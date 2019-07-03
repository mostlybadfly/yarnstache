import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag';
import Gravatar from 'react-gravatar'

const YARNS_QUERY = gql`
  query {
    yarns {
      id
      maker
      name
      weight
      colorway
    }
  }
`;

function Stash() {
  return (
    <Query query={YARNS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching..</div>
        if (error) return <div>Error!</div>
        return (
          <div>
            {data.yarns.map((yarn) => {
              return <div key={yarn.id}>
                <Gravatar />
                <div>
                  <div>{yarn.maker + " " + yarn.name}</div>
                </div>
              </div>
            })}
          </div>
        )
      }}
  </Query>
    )
  }
export default Stash;
