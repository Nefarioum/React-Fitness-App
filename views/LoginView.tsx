import { Image, ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { useTailwind } from 'tailwind-rn'

import React from 'react'
import SignInComponent from '../components/SignInComponent'
import RegisterComponent from '../components/RegisterComponent'

const LoginView = () => {
  const tailwind = useTailwind();
  const Stack = createNativeStackNavigator();

  return (
    <ImageBackground source={require('../assets/login-background.webp')} resizeMode="cover" style={{flex: 1,justifyContent: "cover"}}>
        <View style={[tailwind(`h-full`)]}>
        <Stack.Navigator>
            <Stack.Screen
              name='SignInComponent'
              component={SignInComponent}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='RegisterComponent'
              component={RegisterComponent}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
                  
        </View>
    </ImageBackground>
  )
}

export default LoginView

