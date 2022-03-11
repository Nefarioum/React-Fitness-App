import { SafeAreaView, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'

import React from 'react'
import { Icon } from 'react-native-elements';

const WelcomeView = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind(`bg-blue-100 h-full`)}>
      <View style={tailwind(`bg-white h-4/5 w-full flex-col absolute inset-x-0 bottom-0 rounded-t-xl rounded-t-2xl`)}>
        <View style={[tailwind(`h-24 w-24 bg-white rounded-full absolute inset-x-40 -top-14 justify-center items-center`), {shadowColor: '#000000', shadowRadius: 2, shadowOpacity: 1.0, shadowOffset: { width: 0.1, height: 0.1}}]}>
            <Text style={tailwind(`text-4xl h-20 w-20 text-center items-center content-center top-5`)}>👋</Text>
        </View>
        <Text style={tailwind(`text-3xl text-center mt-14`)}>Hey there!</Text>
        <Text style={tailwind(`text-base px-4 text-center mt-3 font-semibold`)}>Welcome to Your Fitness.</Text>
        <Text style={tailwind(`text-base px-4 text-center mt-8`)}>A app all about your fitness! Please select some of your favourite activies from the options below so we can give you the best experience!</Text>
      </View>

    </View>
  )
}

export default WelcomeView