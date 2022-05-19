import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import { useTailwind } from 'tailwind-rn'
import { useNavigation } from '@react-navigation/native';

import { fireAuth, signOut } from '../firebase';
import Toast from 'react-native-toast-message';

import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import NavigationComponent from '../components/NavigationComponent';
import { Icon } from 'react-native-elements';

const SettingsView = () => {
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
    <SafeAreaView style={tailwind(`h-full`)}>
        <View style={tailwind(`flex items-center justify-center text-center`)}>
            <View style={tailwind(`p-6 justify-center`)}>
                <Text style={tailwind(`text-3xl text-center font-bold`)}> Hi, {(fireAuth.currentUser?.displayName === null ? fireAuth.currentUser?.email : fireAuth.currentUser?.displayName)} </Text>
                <Text style={tailwind(`text-xl font-semibold text-center text-blue-700`)}> {fireAuth.currentUser?.email} </Text>
            </View>
            <Image
                style={tailwind(`w-32 h-32 rounded-full`)}
                source={{
                    uri: `https://ui-avatars.com/api/?name=${fireAuth.currentUser?.displayName}&background=6047ff&color=fff&size=512`,
                }}
            />

            <TouchableOpacity onPress={handleSignOut} style={tailwind(`mt-4 bg-indigo-600 rounded-full w-32`)}>
                <View style={tailwind(`flex flex-row justify-between items-center`)}>
                    <Text style={tailwind(`text-lg ml-3 p-2 text-white text-sm text-center`)}>Sign out</Text>
                    <Icon style={tailwind(`text-center items-center mr-4`)} name='chevron-right' type='font-awesome' color='white' size={16} />
                </View>
            </TouchableOpacity>
        </View>
        <View style={tailwind(`w-full h-11 bg-gray-200 mt-4`)}>
            <Text style={tailwind(`text-gray-500 mt-2 tracking-widest text-base ml-5`)}>Content</Text>
        </View>

        <TouchableOpacity>
            <View style={tailwind(`flex flex-row justify-between`)}>
                <View style={tailwind(`flex flex-row p-4`)}>
                    <Icon style={tailwind(``)} name='heart' type='font-awesome' color='black' size={25} />
                    <Text style={tailwind(`text-black tracking-wide text-base ml-5`)}>Favourites </Text>
                </View>

                <View style={tailwind(`flex flex-row`)}>
                    <Icon style={tailwind(`mt-5 mr-3`)} name='chevron-right' type='font-awesome' color='black' size={16} />   
                </View>

            </View>
        </TouchableOpacity>

        
        <TouchableOpacity>
            <View style={tailwind(`flex flex-row justify-between`)}>
                <View style={tailwind(`flex flex-row p-4`)}>
                    <Icon style={tailwind(``)} name='bicycle' type='font-awesome' color='black' size={19} />
                    <Text style={tailwind(`text-black tracking-wide text-base ml-5`)}>Workouts </Text>
                </View>

                <View style={tailwind(`flex flex-row`)}>
                    <Icon style={tailwind(`mt-5 mr-3`)} name='chevron-right' type='font-awesome' color='black' size={16} />   
                </View>

            </View>
        </TouchableOpacity>

        <View style={tailwind(`w-full h-11 bg-gray-200 mt-4`)}>
            <Text style={tailwind(`text-gray-500 mt-2 tracking-widest text-base ml-5`)}>Preferences</Text>
        </View>

        <TouchableOpacity>
            <View style={tailwind(`flex flex-row justify-between`)}>
                <View style={tailwind(`flex flex-row p-4`)}>
                    <Icon style={tailwind(``)} name='globe' type='font-awesome' color='black' size={29} />
                    <Text style={tailwind(`text-black tracking-wide text-base ml-5`)}>Language </Text>
                </View>

                <View style={tailwind(`flex flex-row`)}>
                    <Icon style={tailwind(`mt-5 mr-3`)} name='chevron-right' type='font-awesome' color='black' size={16} />   
                </View>
            </View>
        </TouchableOpacity>


        <TouchableOpacity>
            <View style={tailwind(`flex flex-row justify-between`)}>
                <View style={tailwind(`flex flex-row p-4`)}>
                    <Icon style={tailwind(``)} name='paint-brush' type='font-awesome' color='black' size={25} />
                    <Text style={tailwind(`text-black tracking-wide text-base ml-5`)}>Themes </Text>
                </View>

                <View style={tailwind(`flex flex-row`)}>
                    <Icon style={tailwind(`mt-5 mr-3`)} name='chevron-right' type='font-awesome' color='black' size={16} />   
                </View>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <View style={tailwind(`flex flex-row justify-between`)}>
                <View style={tailwind(`flex flex-row p-4`)}>
                    <Icon style={tailwind(``)} name='cog' type='font-awesome' color='black' size={28} />
                    <Text style={tailwind(`text-black tracking-wide text-base ml-5`)}>Security </Text>
                </View>

                <View style={tailwind(`flex flex-row`)}>
                    <Icon style={tailwind(`mt-5 mr-3`)} name='chevron-right' type='font-awesome' color='black' size={16} />   
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={tailwind(`flex flex-row justify-between`)}>
                <View style={tailwind(`flex flex-row p-4`)}>
                    <Icon style={tailwind(``)} name='laptop' type='font-awesome' color='black' size={25} />
                    <Text style={tailwind(`text-black tracking-wide text-base ml-5`)}>About </Text>
                </View>

                <View style={tailwind(`flex flex-row`)}>
                    <Icon style={tailwind(`mt-5 mr-3`)} name='chevron-right' type='font-awesome' color='black' size={16} />   
                </View>
            </View>
        </TouchableOpacity>

        <NavigationComponent/>
    </SafeAreaView>
  )
}

export default SettingsView
