import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Navigation from './navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FB5593" />

      <NavigationContainer>
          <Navigation/>
      </NavigationContainer>
    </>
  );
}
