import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import Toast from 'react-native-toast-message';

import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import { fireAuth, signInWithEmailAndPassword, onAuthStateChanged } from '../firebase';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SignInComponent = () => {
  const tailwind = useTailwind();
  const Navigation = useNavigation<NativeStackNavigationProp<{route: {} }>>();

  const showToast = (type:string, title:string, message:string) => { Toast.show({ type: type, text1: title, text2: message });}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fireAuth, user => {
        if (user) {
            Navigation.replace('HomeView', [])
            showToast('success', 'Logged in successfully!', 'Welcome back, you have logged in as ' + user?.email);
        }
    })

    return unsubscribe;
  }, [])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (email == '')  return showToast('error', 'Login Error', 'You need to enter in a email to continue')
    if (password == '')  return showToast('error', 'Login Error', 'You need to enter in a password to continue')

    signInWithEmailAndPassword(fireAuth, email, password).then(userCredentials => {
        const user = userCredentials.user;
        console.log(`Logged in with ${user?.email}`);
    }).catch(error => showToast('error', 'Login Error', error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' ? 'Incorrect credentials provided.' : error.code === 'auth/invalid-email' ? 'Please enter a valid email address.' : error.code === 'auth/user-disabled' ? 'This account has been de-activated for breach of policy.' : error.message))

  };

  return (
    <SafeAreaView style={tailwind(`h-full justify-center items-center`)}>
        <View style={tailwind(`items-center`)}>

            <View style={tailwind(`items-center`)}>
                <Image style = {{ width: 120, height: 120, resizeMode: 'contain'}}
                    source = { require('../assets/dummy-logo.png') }
                />
                <Text style={tailwind(`font-semibold text-white pt-4 pb-4`)}>Welcome back to Your Fitness!</Text>
            </View>

            <View>
            <TextInput
                style={[tailwind(`w-full bg-white mt-2 w-96 text-center h-9 rounded-lg`)]}
                placeholder="Username"
                value = {email}
                onChangeText = {text => setEmail(text)}
            />
            </View>
            <TextInput
                style={tailwind(`w-full bg-white h-9 mt-2 w-96 text-center rounded-lg`)}
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


        <TouchableOpacity 
            style={tailwind(`px-6 py-2 mt-4 rounded-lg bg-white w-40`)}
            onPress = {handleSignIn}>
            <View>
                <Text style={tailwind(`text-lg text-black text-center font-semibold`)}>Login</Text>
            </View>
        </TouchableOpacity>

        <View style={[tailwind(`items-center pt-4`), {borderBottomColor: 'white',alignSelf:'stretch', borderBottomWidth: 1, marginTop: 15}]} />
        <Text style={tailwind(`pt-4 text-white text-center`)}>New to Your Fitness? {"\n"}Start your wellness journey with us today!</Text>
        <TouchableOpacity 
            style={tailwind(`px-6 mt-4 rounded-lg w-40`)}
            onPress = {() => Navigation.navigate('RegisterComponent')}>
        
            <View>
                <Text style={tailwind(`text-lg text-orange-300 text-center font-semibold`)}>Sign Up</Text>
            </View>
        </TouchableOpacity>
        </View>
                
    </SafeAreaView>

  )
}

export default SignInComponent