import { Image, ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'

import React from 'react'

const LoginView = () => {
  const tailwind = useTailwind();
  return (
    <ImageBackground source={require('../assets/login-background.webp')} resizeMode="cover" style={{flex: 1,justifyContent: "cover"}}>
      <SafeAreaView style={tailwind(`h-full items-center justify-center`)}>
        <View style={tailwind(`rounded-xl p-4`)}>
          <View style={tailwind(`items-center`)}>

            <View style={tailwind(`items-center`)}>
              <Image style = {{ width: 120, height: 120, resizeMode: 'contain'}}
                source = { require('../assets/dummy-logo.png') }
              />
              <Text style={tailwind(`font-semibold text-white pt-4`)}>Welcome back to Your Fitness!</Text>
            </View>

            <TextInput
              style={tailwind(`w-full bg-white px-32 py-2 mt-2 rounded-lg`)}
              placeholder="Username"
              //value = {}
              //onChangeText = {text => }
            />
            <TextInput
              style={tailwind(`w-full bg-white px-32 py-2 mt-2 rounded-lg`)}
              placeholder="Password"
              //value = {}
              //onChangeText = {text => }
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
            <TouchableOpacity style={tailwind(`px-6 mt-4 rounded-lg w-40`)}>
                <View>
                    <Text style={tailwind(`text-lg text-orange-300 text-center font-semibold`)}>Sign Up</Text>
                </View>
            </TouchableOpacity>
          </View>

                  
        </View>
      </SafeAreaView> 
    </ImageBackground>
  )
}

export default LoginView

