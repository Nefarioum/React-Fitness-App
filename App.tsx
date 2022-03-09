import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
                  name = 'HomeView'
                  component = { HomeView }
                  options =  {{
                    headerShown: false
                  }}
                />
              </Stack.Navigator>
            </TailwindProvider>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}