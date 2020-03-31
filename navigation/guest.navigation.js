import React                                    from 'react';
import { createStackNavigator }                 from '@react-navigation/stack';

//import MainScreen     from './screens/main.screen';
import LoginScreen        from '../screens/login.screen';
import RegisterScreen     from '../screens/register.screen';
import ForgotScreen       from '../screens/forgot.screen';
import IntroductionScreen from '../screens/introduction.screen';

const LoggedOut = createStackNavigator();

export default class GuestNavigation extends React.Component {
  constructor(props) { super(props); }

  render() {
      return(
          <LoggedOut.Navigator initialRouteName={'Register'} screenOptions={{ gestureEnabled: false }}>
              <LoggedOut.Screen name="Login"            component={LoginScreen}         options={{ headerShown: false }} />
              <LoggedOut.Screen name="Register"         component={RegisterScreen}      options={{ headerShown: false }} />
              <LoggedOut.Screen name="Forgot"           component={ForgotScreen}        options={{ headerShown: false }} />
          </LoggedOut.Navigator>
      );
  }
};
