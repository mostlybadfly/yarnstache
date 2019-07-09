import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag';

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
