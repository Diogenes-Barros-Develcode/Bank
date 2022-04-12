import React from 'react';
import {useTheme} from 'styled-components';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {Dashboard} from '../screens/Dashboard';
import {Register} from '../screens/Register';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secundary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}>
      <Screen
        name="Listing"
        component={Dashboard}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="dollar-sign" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Resume"
        component={Register}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
