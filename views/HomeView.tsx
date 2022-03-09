import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import { useTailwind } from 'tailwind-rn'
import { useNavigation } from '@react-navigation/native';

import { fireAuth, signOut } from '../firebase';

import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const HomeView = () => {
  const currentHour = new Date().getHours()
  const currentTimeOfDay = 'Good ' + (currentHour < 12 ? 'morning!' : currentHour < 18 ? 'afternoon!' : 'evening!');

  const handleSignOut = () => {
    signOut(fireAuth).then(() => {
      Navigation.replace('LoginView', [])
    });
  };

  const tailwind = useTailwind();
  const Navigation = useNavigation<NativeStackNavigationProp<{route: {} }>>();
  return (
    <SafeAreaView style={tailwind(`h-full justify-center items-center`)}>
      <Text style={tailwind(`text-center`)}>{currentTimeOfDay}{"\n"} You are signed in as {fireAuth.currentUser?.email} </Text>

      <TouchableOpacity 
            onPress={handleSignOut}
            style={tailwind(`px-6 py-2 mt-4 rounded-lg bg-white w-40`)}>
            <View>
                <Text style={tailwind(`text-lg text-black text-center font-semibold`)}>Sign out</Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeView
