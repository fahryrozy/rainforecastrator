import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import BootSplash from 'react-native-bootsplash';
import {AnimatedBootSplash} from '@presentation/screens/Splash/SplashScreen';

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
  const [visible, setVisible] = useState(true);
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
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator initialRouteName="Home" screenOptions={CustomTransition}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
