import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import { useTailwind } from 'tailwind-rn'

const NavigationComponent = () => {
  const Navigation = useNavigation<NativeStackNavigationProp<{route: {} }>>();
  const Route = useRoute();
  
  const tailwind = useTailwind();

  return (
    <View style = {[tailwind(`absolute bottom-0 bg-white w-full flex-row justify-evenly py-2 mt-auto border-gray-300 border-t-4`), {height: '12%'}]}>
      <TouchableOpacity onPress={() => Navigation.navigate('HomeView' as never)} style= {tailwind(`flex flex-col justify-between w-24 p-2 h-4/6 rounded-full`)}>
        <Icon name='home' type='font-awesome' color={Route.name == 'HomeView' ? 'indigo' : 'gray'} size={16} />
        <Text style = {tailwind(`${Route.name == 'HomeView' ? 'text-indigo-700' : 'text-gray-300'} text-center mt-1`)}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigation.navigate('MapView' as never)} style = {tailwind(`flex flex-col justify-between w-24 p-2 h-4/6 rounded-full`)}>
        <Icon name='map' type='font-awesome' color={Route.name == 'MapView' ? 'indigo' : 'gray'} size={16} />
        <Text style = {tailwind(`${Route.name == 'MapView' ? 'text-indigo-700' : 'text-gray-300'} text-center mt-1`)}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigation.navigate('CalendarView' as never)} style = {tailwind(`flex flex-col justify-between w-24 p-2 h-4/6 rounded-full`)}>
        <Icon name='calendar' type='font-awesome' color={Route.name == 'CalendarView' ? 'indigo' : 'gray'} size={16} />
        <Text style = {tailwind(`${Route.name == 'CalendarView' ? 'text-indigo-700' : 'text-gray-300'} text-center mt-1`)}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {tailwind(`flex flex-col justify-between w-24 p-2 h-4/6 rounded-full`)}>
        <Icon name='cog' type='font-awesome' color={Route.name == 'SettingsView' ? 'indigo' : 'gray'} size={16} />
        <Text style = {tailwind(`${Route.name == 'SettingsView' ? 'text-indigo-700' : 'text-gray-300'} text-center mt-1`)}>Settings</Text>
      </TouchableOpacity>
  </View>
  )
}

export default NavigationComponent