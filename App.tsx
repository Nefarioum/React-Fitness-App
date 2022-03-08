import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

import { Provider } from 'react-redux';
import { Store } from './Store'

import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'expo-modules-core';

import RegisterView from './views/RegisterView';
import * as Sentry from 'sentry-expo';

import { DSN } from '@env'

import HomeView from './views/HomeView';

export default function App() {
  const Stack = createNativeStackNavigator();

  Sentry.init({
    dsn: DSN,
    enableInExpoDevelopment: true,
    debug: true,
  });
  
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset = {Platform.OS === 'ios' ? -64 : 0}
            style = {{flex: 1}}>
            <TailwindProvider utilities={utilities}>
              <Stack.Navigator>
                <Stack.Screen
                  name = 'RegisterView'
                  component = { RegisterView }
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