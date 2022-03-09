import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'

import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterComponent = () => {
  const [isSelected, setSelection] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(username, password).then(userCredentials => {
        const user = userCredentials.user;
        console.log(user?.email);
    }).catch(error => alert(error.message))
  };

  const tailwind = useTailwind();
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={tailwind(`h-full justify-center items-center`)}>
        <View style={tailwind(`items-center`)}>

        <View style={tailwind(`items-center`)}>
        <Image style = {{ width: 120, height: 120, resizeMode: 'contain'}}
            source = { require('../assets/dummy-logo.png') }
        />
        <Text style={tailwind(`font-semibold text-white pt-4 pb-4`)}>Register an account with us!</Text>
        </View>

        <TextInput
            style={tailwind(`w-full bg-white text-center px-32 py-2 mt-2 w-96 rounded-lg`)}
            placeholder="Username"
            value = {username}
            onChangeText = {text => setUsername(text)}
        />

        <TextInput
            style={tailwind(`w-full bg-white text-center px-32 py-2 mt-2 w-96 rounded-lg`)}
            placeholder="Email"
            //value = {}
            //onChangeText = {text => }
        />
        <TextInput
            style={tailwind(`w-full bg-white text-center px-32 py-2 mt-2 w-96 rounded-lg`)}
            placeholder="Password"
            value = {password}
            onChangeText = {text => setPassword(text)}
            secureTextEntry
        />

        <TextInput
            style={tailwind(`w-full bg-white text-center px-32 py-2 mt-2 w-96 rounded-lg`)}
            placeholder="Confirm Password"
            //value = {}
            //onChangeText = {text => }
            secureTextEntry
        />
        </View>



        <View style={tailwind(`flex flex-col items-center`)}>

        <View style={[tailwind(`items-center`), {flexDirection:"row"}]}>
        <CheckBox
            center
            checked={isSelected}
            onPress={() => setSelection(!isSelected)}
            style={tailwind(`items-center`)}
        />
        <Text style={tailwind(`font-semibold text-white`)}>Check to agree to our terms and services</Text>
        </View>

        <TouchableOpacity 
            onPress={handleSignUp}
            style={tailwind(`px-6 py-2 mt-4 rounded-lg bg-white w-40`)}>
            <View>
                <Text style={tailwind(`text-lg text-black text-center font-semibold`)}>Sign up!</Text>
            </View>
        </TouchableOpacity>
        </View>
                
    </SafeAreaView>
  )
}

export default RegisterComponent

const styles = StyleSheet.create({})