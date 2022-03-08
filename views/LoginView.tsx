import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const LoginView = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Text>Login</Text>
      </View>
    </SafeAreaView> 
  )
}

export default LoginView

