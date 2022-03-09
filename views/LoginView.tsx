import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import { Icon } from 'react-native-elements';

const LoginView = () => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={tailwind(`bg-white h-full items-center justify-center`)}>
      <View>

        <View style={tailwind(`items-center`)}>
          <Image style = {{ width: 120, height: 120, resizeMode: 'contain'}}
            source = {{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'
              }}
          />
          <Text style={tailwind(`font-semibold`)}>Welcome back to Your Fitness!</Text>
        </View>

        <TextInput
          style={tailwind(`w-full px-32 py-2 mt-2 border rounded-xl`)}
          placeholder="Username"
          //value = {}
          //onChangeText = {text => }
        />
        <TextInput
          style={tailwind(`w-full px-32 py-2 mt-2 border rounded-xl`)}
          placeholder="Password"
          //value = {}
          //onChangeText = {text => }
          secureTextEntry
        />
      </View>
      

      <View style={tailwind(`flex flex-col items-center`)}>
        <TouchableOpacity style={tailwind(`px-6 py-2 mt-4 border rounded-lg w-40`)}>
            <View>
                <Text style={tailwind(`text-lg text-black text-center font-semibold`)}>Login</Text>
            </View>
        </TouchableOpacity>

        <View style={[tailwind(`items-center pt-4`), {borderBottomColor: 'black',alignSelf:'stretch', borderBottomWidth: 1, marginTop: 15}]} />
        <Text style={tailwind(`pt-4 text-black`)}>New here? Sign up with us! </Text>
        <TouchableOpacity style={tailwind(`px-6 py-2 mt-4 bg-black rounded-lg w-40`)}>
            <View>
                <Text style={tailwind(`text-lg text-white text-center font-semibold`)}>Register</Text>
            </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView> 
  )
}

export default LoginView

