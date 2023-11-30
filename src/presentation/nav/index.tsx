import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import BootSplash from 'react-native-bootsplash';

BootSplash.isVisible().then(value => console.log(value));
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
import OfflineScreen from '@presentation/screens/Offline/OfflineScreen';

const Router = () => {
  const [isOffline, setIsOffline] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log(state);
      if (!state.isConnected && !state.isInternetReachable) {
        setIsOffline(true);
      } else setIsOffline(false);
    });
    return () => {
      unsubscribe();
    };
  }, [isOffline]);

  if (isOffline) {
    return <OfflineScreen />;
  }

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
