import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'

const LoginView = () => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={tailwind(`bg-white h-full`)}>
      <View style={tailwind(`p-5`)}>
        <Text>Login</Text>
      </View>
    </SafeAreaView> 
  )
}

export default LoginView

