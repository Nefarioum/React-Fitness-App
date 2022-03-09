import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'

import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const SignInComponent = () => {
  const tailwind = useTailwind();
  const Navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={tailwind(`h-full justify-center items-center`)}>
        <View style={tailwind(`items-center`)}>

        <View style={tailwind(`items-center`)}>
        <Image style = {{ width: 120, height: 120, resizeMode: 'contain'}}
            source = { require('../assets/dummy-logo.png') }
        />
        <Text style={tailwind(`font-semibold text-white pt-4 pb-4`)}>Welcome back to Your Fitness!</Text>
        </View>

        <TextInput
            style={tailwind(`w-full bg-white px-32 py-2 mt-2 rounded-lg`)}
            placeholder="Username"
            value = {username}
            onChangeText = {text => setUsername(text)}
        />
        <TextInput
            style={tailwind(`w-full bg-white px-32 py-2 mt-2 rounded-lg`)}
            placeholder="Password"
            value = {password}
            onChangeText = {text => setPassword(text)}
            secureTextEntry
            />
        </View>

        <TouchableOpacity style={tailwind(`items-end`)}>
            <View>
                <Text style={tailwind(`pt-4 text-white text-center`)}>Forgot your password?</Text>
            </View>
        </TouchableOpacity>
        <View style={tailwind(`flex flex-col items-center`)}>


        <TouchableOpacity style={tailwind(`px-6 py-2 mt-4 rounded-lg bg-white w-40`)}>
            <View>
                <Text style={tailwind(`text-lg text-black text-center font-semibold`)}>Login</Text>
            </View>
        </TouchableOpacity>



        <View style={[tailwind(`items-center pt-4`), {borderBottomColor: 'white',alignSelf:'stretch', borderBottomWidth: 1, marginTop: 15}]} />
        <Text style={tailwind(`pt-4 text-white text-center`)}>New to Your Fitness? {"\n"}Start your wellness journey with us today!</Text>
        <TouchableOpacity 
        style={tailwind(`px-6 mt-4 rounded-lg w-40`)}
        onPress = {() => Navigation.navigate('RegisterComponent')}
        >
        
            <View>
                <Text style={tailwind(`text-lg text-orange-300 text-center font-semibold`)}>Sign Up</Text>
            </View>
        </TouchableOpacity>
        </View>
                
    </SafeAreaView>

  )
}

export default SignInComponent