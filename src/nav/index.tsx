import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Splash: undefined;
};
const CustomTransition = {
  headerShown: false,
};

/*--------------------------
   Router
---------------------------
*/
import Home from '../Home';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={CustomTransition}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
