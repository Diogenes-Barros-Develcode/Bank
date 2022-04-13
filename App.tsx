import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import theme from './src/global/styles/theme';

import {NavigationContainer} from '@react-navigation/native';

import {AppRoutes} from './src/routes/app.routes';
import {Dashboard} from './src/screens/Dashboard';

export default function App() {
  console.log('Aqui');
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
