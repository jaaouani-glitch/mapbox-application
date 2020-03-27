import React                                         from 'react';
import { NavigationContainer }                       from '@react-navigation/native';
import { ApolloClient }                              from 'apollo-client';
import { ApolloProvider }                            from '@apollo/react-hooks';
import { InMemoryCache, HttpLink }                   from 'apollo-boost';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import GuestNavigation                               from './navigation/guest.navigation';
import OnlineNavigation                              from './navigation/account.navigation';

import { configuration }                             from './configuration';

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

    const Switch  = new createSwitchNavigator({
      Guest:    GuestNavigation,
      Online:   OnlineNavigation
    }, { initialRouteName: 'Online', defaultNavigationOptions: { gestureEnabled: false } });

    const Final   = createAppContainer(Switch);

    return(
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Final />
        </NavigationContainer>
      </ApolloProvider>
    );
  }
}