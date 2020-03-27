import React                                    from 'react';
import { createMaterialTopTabNavigator }        from '@react-navigation/material-top-tabs';

import MainScreen         from '../screens/main.screen';
import ProfileScreen      from '../screens/profile.screen';
import ConversationScreen from '../screens/conversation.screen';

const Online = createMaterialTopTabNavigator();

export default class OnlineNavigation extends React.Component {
  constructor(props) { super(props); }

  render() {
      return(
          <Online.Navigator initialRouteName={'Feed'} tabBarOptions={{ showLabel: false,  
                        tabStyle: { height: 0, backgroundColor: 'transparent' }, 
                            style: { height: 0, backgroundColor: 'transparent'} }
                        }  style={{ height: 0, backgroundColor: 'transparent' }} swipeEnabled={true}>
              <Online.Screen name="Conversation" component={ConversationScreen}     options={{ headerShown: false }} />
              <Online.Screen name="Feed"         component={MainScreen}             options={{ headerShown: false }} />
              <Online.Screen name="Profile"      component={ProfileScreen}          options={{ headerShown: false }} />
          </Online.Navigator>
      );
  }
};
