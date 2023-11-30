import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';

import NetInfo from '@react-native-community/netinfo';

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
import Home from '@presentation/screens/Home/Home';
import Search from '@presentation/screens/Search/Search';

const Router = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log(state);
      if (!state.isConnected && !state.isInternetReachable) {
        console.log('offline');
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={CustomTransition}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
