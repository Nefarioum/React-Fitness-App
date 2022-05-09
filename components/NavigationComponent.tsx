import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import { useTailwind } from 'tailwind-rn'

const NavigationComponent = () => {
  const tailwind = useTailwind();
  return (
    <View style = {[tailwind(`absolute bottom-0 bg-white w-full flex-row justify-evenly py-2 mt-auto border-gray-300 border-t-4`), {height: '12%'}]}>
      <TouchableOpacity style= {tailwind(`flex flex-col justify-between w-24 p-2 h-4/6 rounded-full`)}>
        <Icon name='home' type='font-awesome' color='indigo' size={16} />
        <Text style = {tailwind(`text-indigo-700 text-center mt-1`)}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {tailwind(`flex flex-col justify-between w-24 p-2 h-4/6 rounded-full`)}>
        <Icon name='map' type='font-awesome' color='gray' size={16} />
        <Text style = {tailwind(`text-gray-300 text-center mt-1`)}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {tailwind(`flex flex-col justify-between w-24 p-2 h-4/6 rounded-full`)}>
        <Icon name='cog' type='font-awesome' color='gray' size={16} />
        <Text style = {tailwind(`text-gray-300 text-center mt-1`)}>Settings</Text>
      </TouchableOpacity>
  </View>
  )
}

export default NavigationComponent