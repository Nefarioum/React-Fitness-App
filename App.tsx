import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

import { Provider } from 'react-redux';
import { Store } from './Store'

import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'expo-modules-core';

import * as Sentry from 'sentry-expo';

import { DSN } from '@env'

import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import WelcomeView from './views/WelcomeView';
import MapView from './views/MapView';
import CalendarView from './views/CalendarView';
import CardioWorkoutView from './views/CardioWorkoutView';
import LegsWorkoutView from './views/LegsWorkoutView';

export default function App() {
  const Stack = createNativeStackNavigator();

  Sentry.init({
    dsn: DSN,
    enableInExpoDevelopment: true,
    debug: true,
  });
  
  return (
    <Provider store={Store}>
      <NavigationContainer theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'transparent',
        },
      }}>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset = {Platform.OS === 'ios' ? -64 : 0}
            style = {{flex: 1}}>
            <TailwindProvider utilities={utilities}>
              <Stack.Navigator>
                <Stack.Screen
                    name = 'LoginView'
                    component = { LoginView }
                    options =  {{
                      headerShown: false
                    }}
                  />
                <Stack.Screen
                  name = 'WelcomeView'
                  component = { WelcomeView }
                  options =  {{
                    headerShown: false
                  }}
                />
                <Stack.Screen
                  name = 'HomeView'
                  component = { HomeView }
                  options =  {{
                    headerShown: false
                  }}
                />
                <Stack.Screen
                  name = 'MapView'
                  component = { MapView }
                  options =  {{
                    headerShown: false
                  }}
                />
                <Stack.Screen
                  name = 'CalendarView'
                  component = { CalendarView }
                  options =  {{
                    headerShown: false
                  }}
                />
                <Stack.Screen
                  name = 'CardioWorkoutView'
                  component = { CardioWorkoutView }
                  options =  {{
                    headerShown: false
                  }}
                />
                <Stack.Screen
                  name = 'LegsWorkoutView'
                  component = { LegsWorkoutView }
                  options =  {{
                    headerShown: false
                  }}
                />
              </Stack.Navigator>
              <Toast
                position='bottom'
                bottomOffset={20}
              />
            </TailwindProvider>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}