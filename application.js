import React                                    from 'react';
import { NavigationContainer }                  from '@react-navigation/native';
import { ApolloClient }                         from 'apollo-client';
import { ApolloProvider }                       from '@apollo/react-hooks';
import { InMemoryCache, HttpLink }              from 'apollo-boost';

import GuestNavigation                          from './navigation/guest.navigation';
import { configuration }                        from './configuration';

export default class Application extends React.Component {
  constructor(props) { super(props); }

  render() {
    const link   = new HttpLink({ uri: configuration.APOLLO_SERVER_URI });
    const client = new ApolloClient({ cache: new InMemoryCache(), clientState: { defaults: 
        { 
        account: { __typename: 'Account' }, 
        session: { __typename: 'Session' },
        accessToken: '', refreshToken: '', 
        }
    }, link });

    return(
      <ApolloProvider client={client}>
        <NavigationContainer>
          <GuestNavigation />
        </NavigationContainer>
      </ApolloProvider>
    );
  }
}