import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { useTailwind } from 'tailwind-rn/dist';
import { fireAuth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

import MapComponent from '../components/MapComponent'

const MapView = () => {
  const tailwind = useTailwind();
  const Navigation = useNavigation();

  return (
    <View>
      <View style={tailwind(`h-1/2`)}>
        <MapComponent />
      </View>
      <View style={tailwind(`h-1/2 bg-white`)}>
        <Text style={tailwind(`text-center pt-5 text-xl`)}>👋 Hey {(fireAuth.currentUser?.displayName === null ? fireAuth.currentUser?.email : fireAuth.currentUser?.displayName)}!</Text>
        <Text style={tailwind(`text-center pt-3`)}>The following events are currently available to attend:</Text>

        <View style={tailwind(`h-3/4 w-full flex-col justify-end items-center`)}>
          <TouchableOpacity
            onPress={() => Navigation.navigate('HomeView' as never)}
            style={tailwind(`bg-purple-500 border-gray-500 rounded-full w-20`)}>
                <Text style={tailwind(`text-lg p-2 text-white text-center`)}>🏠</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default MapView