import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { useTailwind } from 'tailwind-rn/dist';
import { fireAuth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

import {MapComponent, EventsData, mapRef } from '../components/MapComponent'

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

        <View style={tailwind(`m-9 mt-4 ml-9 flex-row flex-wrap`)}>
          {EventsData.map((item, index) => {
            return (
              <TouchableOpacity 
                key={item.id}
                onPress={() => {
                  console.log(`${EventsData[index].name}`)
                  mapRef?.current?.animateToRegion({
                    latitude: item.location.latitude,
                    longitude: item.location.longitude,
                    latitudeDelta: 0.0005,
                    longitudeDelta: 0.0005
                  }, 1000)
                  setTimeout(() => item?.marker?.current?.showCallout(), 1000);
                }}
                style={[tailwind(`ml-4 mb-4 rounded-xl bg-white w-40 bg-white border border-gray-500`)]}>
                    <Text style={[tailwind(`p-2 text-black text-center font-semibold`)]}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={tailwind(`w-full flex-col justify-end items-center`)}>
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