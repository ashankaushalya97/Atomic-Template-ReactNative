import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../containers';
import {isReadyRef, navigationRef} from './RootNavigation';

const RootStack = createNativeStackNavigator();
const RootNavigator = () => (
  <NavigationContainer
    ref={navigationRef}
    onReady={() => {
      isReadyRef.current = true;
    }}>
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="login" component={Login} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
