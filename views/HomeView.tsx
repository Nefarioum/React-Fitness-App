import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import { useTailwind } from 'tailwind-rn'
import { useNavigation } from '@react-navigation/native';

import { fireAuth, signOut } from '../firebase';
import Toast from 'react-native-toast-message';

import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const HomeView = () => {
  const currentHour = new Date().getHours()
  const currentTimeOfDay = 'Good ' + (currentHour < 12 ? 'morning!' : currentHour < 18 ? 'afternoon!' : 'evening!');

  const showToast = (type:string, title:string, message:string) => { Toast.show({ type: type, text1: title, text2: message });}

  const handleSignOut = () => {
    signOut(fireAuth).then(() => {
      Navigation.replace('LoginView' as never, [] as never)
      showToast('success', 'Logged out successfully!', 'You have successfully logged out of your account.');
    });
  };

  const tailwind = useTailwind();
  const Navigation = useNavigation<NativeStackNavigationProp<{route: {} }>>();
  return (
    <SafeAreaView style={tailwind(`h-full justify-center items-center bg-white`)}>
      <Text style={tailwind(`text-center`)}>{currentTimeOfDay}{"\n"} You are signed in as {(fireAuth.currentUser?.displayName === null ? fireAuth.currentUser?.email : fireAuth.currentUser?.displayName)}</Text>

      <View style={tailwind(`pt-5 justify-center items-center`)}>
        <TouchableOpacity
                    onPress={() => Navigation.navigate('MapView' as never)}
                    style={tailwind(`ml-4 bg-purple-500 border-gray-500 rounded-full w-80`)}>
                        <Text style={tailwind(`text-lg p-2 text-white text-center`)}>View Interactive Map</Text>
        </TouchableOpacity>
        <TouchableOpacity 
              onPress={handleSignOut}
              style={tailwind(`px-6 py-2 mt-4 rounded-lg bg-white w-40`)}>
              <View>
                  <Text style={tailwind(`text-lg text-black text-center font-semibold`)}>Sign out</Text>
              </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default HomeView
