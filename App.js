import React from "react";
import { Text, View } from 'react-native';
import { RestarauntScreen } from "./src/features/restaraunts/screens/restaraunts.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/index";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { getFocusedRouteNameFromRoute, NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { restaurantsRequest } from './src/services/restaurants.services';
import styled from 'styled-components';
import { SafeAreaView, Platform, StatusBar } from 'react';


const SafeArea = styled.SafeAreaView`
flex:1;

`;

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })
  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  function Settings() {
    return <Text>Settings</Text>
  }
  const Map = () => <Text>Map</Text>
  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider theme={theme}>
      <SafeArea>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Restaurants') {
                  iconName = 'restaurant'
                } else if (route.name === 'Settings') {
                  iconName = 'settings'
                } else if (route.name === 'Maps') {
                  iconName = 'map-sharp'
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name='Restaurants' component={RestarauntScreen} />
            <Tab.Screen name='Maps' component={Map} />
            <Tab.Screen name='Settings' component={Map} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeArea>
    </ThemeProvider>
  )
}
