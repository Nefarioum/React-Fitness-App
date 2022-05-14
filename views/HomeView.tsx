import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import { useTailwind } from 'tailwind-rn'
import { useNavigation } from '@react-navigation/native';

import { fireAuth, signOut } from '../firebase';
import Toast from 'react-native-toast-message';

import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import NavigationComponent from '../components/NavigationComponent';

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
    <SafeAreaView style={tailwind(`h-full bg-gray-100`)}>
      <View style={tailwind(`h-1/6 flex flex-row`)}>
        <View style={tailwind(`p-6 justify-center`)}>
          <Text style={tailwind(`text-3xl font-bold`)}> Hi, {(fireAuth.currentUser?.displayName === null ? fireAuth.currentUser?.email : fireAuth.currentUser?.displayName)} </Text>
          <Text style={tailwind(`text-xl font-semibold text-blue-700`)}> Let's check your activity </Text>
        </View>
        
        <View style={tailwind(`w-2/6 pr-4 justify-center items-end`)}>
          <Image
            style={tailwind(`w-16 h-16 rounded-full border-2`)}
            source={{
              uri: 'https://ui-avatars.com/api/?name=Nefarious&background=6047ff&color=fff',
            }}
          />
        </View>
      </View>
      
      <View style={[tailwind(`justify-center flex flex-row`), {height: "25%"}]}>
          <View style={[tailwind(`bg-white m-3 pb-4 h-full w-2/6 rounded-xl`), {shadowColor: '#000000', shadowRadius: 2, shadowOpacity: 0.5, shadowOffset: { width: 0.1, height: 0.1}}]}>
            <Text style={tailwind(`text-xl font-bold mt-2 p-1`)}>💪 Completed</Text>
            <Text style={tailwind(`text-4xl font-semibold mt-7 text-center justify-center items-center`)}>20</Text>
            <Text style={tailwind(`text-gray-500 font-semibold mt-2 text-center`)}>Total completed workouts</Text>
          </View>

          <View style={tailwind(`m-3 h-full w-3/6`)}>
            <View style={[tailwind(`bg-white w-full rounded-xl text-center`), {height:"45%", shadowColor: '#000000', shadowRadius: 2, shadowOpacity: 0.5, shadowOffset: { width: 0.1, height: 0.1}}]}>
              <Text style={tailwind(`text-xl font-bold mt-2 text-center`)}> 🏃‍♂️In Progress</Text>

              <View style={tailwind(`flex flex-row justify-center items-center`)}>
                <Text style={tailwind(`text-3xl font-semibold mt-2 text-center justify-center items-center`)}>2</Text>
                <Text style={tailwind(`text-gray-500 font-semibold pl-2 mt-2 text-center`)}>Workouts</Text>
              </View>
            </View>
            <View style={[tailwind(`bg-white w-full mt-5 rounded-xl`), {height:"45%", shadowColor: '#000000', shadowRadius: 2, shadowOpacity: 0.5, shadowOffset: { width: 0.1, height: 0.1} }]}>
              <Text style={tailwind(`text-xl font-bold mt-2 text-center`)}>⏱️ Time Spent</Text>
              <View style={tailwind(`flex flex-row justify-center items-center`)}>
                <Text style={tailwind(`text-3xl font-semibold mt-2 text-center justify-center items-center`)}>340</Text>
                <Text style={tailwind(`text-gray-500 font-semibold pl-2 mt-2 text-center`)}>Minutes</Text>
              </View>
            </View>
          </View>
      </View>

      <View style={[tailwind(`w-full`), {height: "30%"}]}>
        <View style={tailwind(`p-6 pt-8 justify-center`)}>
          <Text style={tailwind(`text-xl font-semibold pb-4`)}> Checkout our latest workouts! </Text>

          <View style={tailwind(`flex flex-row h-5/6`)}>
          <View style={[tailwind(`bg-white w-4/6 rounded-xl bg-orange-400 flex flex-row`), {height: "80%", shadowColor: '#000000', shadowRadius: 2, shadowOpacity: 0.5, shadowOffset: { width: 0.1, height: 0.1}}]}>

            <View style={[tailwind(``), {width: "60%"}]}>
              <Text style={tailwind(`text-white text-xl font-bold mt-2 ml-2 p-1`)}>Cardio</Text>
              <Text style={tailwind(`text-white ml-2 p-1`)}>10 Exercises</Text>
              <Text style={tailwind(`text-white ml-2 p-1`)}>50 Minutes</Text>
            </View>

            <View style={[tailwind(`justify-end`), {width: "40%"}]}>
              <Image
                style={tailwind(`w-24 h-32`)}
                source={{
                  uri: 'http://assets.stickpng.com/images/580b585b2edbce24c47b2b72.png',
                }}
              />
            </View>

          </View>
         
          <View style={[tailwind(`bg-white w-4/6 rounded-xl bg-blue-400 flex flex-row ml-4`), {height: "80%", shadowColor: '#000000', shadowRadius: 2, shadowOpacity: 0.5, shadowOffset: { width: 0.1, height: 0.1}}]}>

            <View style={[tailwind(``), {width: "60%"}]}>
              <Text style={tailwind(`text-white text-xl font-bold mt-2 ml-2 p-1`)}>Legs</Text>
              <Text style={tailwind(`text-white ml-2 p-1`)}>4 Exercises</Text>
              <Text style={tailwind(`text-white ml-2 p-1`)}>30 Minutes</Text>
            </View>

            <View style={[tailwind(`justify-end`), {width: "40%"}]}>
              <Image
                style={tailwind(`w-24 h-32 mb-3`)}
                source={{
                  uri: 'http://assets.stickpng.com/images/580b585b2edbce24c47b2b72.png',
                }}
              />
            </View>

          </View>
          </View>
        </View>
      </View>

      <View style={[tailwind(`bg-white mx-6 rounded-xl flex flex-row rounded-xl`), {height: "9%",shadowColor: '#000000', shadowRadius: 2, shadowOpacity: 0.5, shadowOffset: { width: 0.1, height: 0.1}}]}>
        <View style={tailwind(`w-1/6 justify-center items-center`)}>
          <Text style={tailwind(`text-4xl font-bold text-center `)}>🎉</Text>
        </View>

        <View style={tailwind(`w-5/6 p-3 flex`)}>
          <Text style={tailwind(`text-xl font-bold`)}>Keep up the progress!</Text>
          <Text style={tailwind(`text-gray-500 font-semibold `)}>You are more active then 75% of our users!</Text>
        </View>
      </View>
      
      <NavigationComponent />
    </SafeAreaView>
  )
}

export default HomeView
