import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import Toast from 'react-native-toast-message';

import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import { fireAuth, createUserWithEmailAndPassword } from '../firebase';

const RegisterComponent = () => {
  const [isSelected, setSelection] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const showToast = (type:string, title:string, message:string) => {
    Toast.show({
      type: type,
      text1: title,
      text2: message
    });
  }

  const handleSignUp = () => {
    if (email == '')  return showToast('error', 'Login Error', 'You need to enter in a email to continue')
    if (password == '')  return showToast('error', 'Login Error', 'You need to enter in a password to continue')
    if (password != passwordConfirm) return showToast('error', 'Login Error', 'The password you entered does not match!')
    if (!isSelected) return showToast('error', 'Login Error', 'You need to accept the terms and services!')

    createUserWithEmailAndPassword(fireAuth, email, password).then(userCredentials => {
        const user = userCredentials.user;
        
        console.log(`Registered with email ${user?.email}`);
    }).catch(error => showToast('error', 'Login Error', error.code === 'auth/email-already-in-use' ? 'This email is already in use.' : error.code === 'auth/invalid-email' ? 'Please enter a valid email address.' : error.code === 'auth/weak-password' ? 'Please enter a more stronger password.' : error.message));

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
                style={tailwind(`w-full bg-white text-center h-9 mt-2 w-96 rounded-lg`)}
                placeholder="Username"
                //value = {username}
                //onChangeText = {text => setUsername(text)}
            />

            <TextInput
                style={tailwind(`w-full bg-white text-center h-9 mt-2 w-96 rounded-lg`)}
                placeholder="Email"
                value = {email}
                onChangeText = {text => setEmail(text)}
            />
            <TextInput
                style={tailwind(`w-full bg-white text-center h-9 mt-2 w-96 rounded-lg`)}
                placeholder="Password"
                value = {password}
                onChangeText = {text => setPassword(text)}
                textContentType="oneTimeCode"
                secureTextEntry
            />

            <TextInput style={{height: 0.1}} />

            <TextInput
                style={tailwind(`w-full bg-white text-center h-9 mt-2 w-96 rounded-lg`)}
                placeholder="Confirm Password"
                value = {passwordConfirm}
                onChangeText = {text => setPasswordConfirm(text)}
                textContentType="oneTimeCode"
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